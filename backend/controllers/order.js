const Order = require('../models/order');
const Exchange = require('../models/exchange');
const io = require('../socketio');
const schedule = require('node-schedule');
const mongooseHelper = require('../utils/mongoose');
const mongoose = require('mongoose');
const webmoneyStatisticsHelper = require('../utils/webmoneyStatistics');

exports.createOrder = async (req, res, next) => {
   try {
      if (Object.keys(req.body).length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      const body = req.body;
      body.givenCurrency = body.givenCurrencyId;
      body.takenCurrency = body.takenCurrencyId;
      delete body.givenCurrencyId;
      delete body.takenCurrencyId;

      const exchange = await Exchange.findOne({
         givenCurrency: mongoose.Types.ObjectId(body.givenCurrency),
         takenCurrency: mongoose.Types.ObjectId(body.takenCurrency),
      });
      if (!exchange || !exchange.isActive) {
         const error = new Error('Active exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      await webmoneyStatisticsHelper.increaseOrdersAmount();
      const webmoneyStatistics = await webmoneyStatisticsHelper.getWebmoneyStatistics();
      body.number = webmoneyStatistics.ordersAmount;

      let order = new Order(body);
      await order.save();
      order = await Order.findById(order._id)
         .populate('givenCurrency')
         .populate('takenCurrency');

      io.getIO().emit('orders', {
         action: 'create',
         order,
      });

      res.status(200).json({ msg: 'Order created successfully', order });
   } catch (err) {
      console.log(err);
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.getOrders = async (req, res, next) => {
   try {
      let page = +req.query.page - 1;
      const amount = 10;
      let options = {
         status: new RegExp('^' + req.query.status),
      };

      if (req.query.givenCurrency) {
         options = {
            ...options,
            givenCurrency: req.query.givenCurrency,
         };
      }

      if (req.query.takenCurrency) {
         options = {
            ...options,
            takenCurrency: req.query.takenCurrency,
         };
      }

      if (req.query.id && mongooseHelper.isValidId(req.query.id)) {
         options = {
            _id: req.query.id,
         };
      }

      if ((await Order.countDocuments()) < page * 10) {
         page--;
      }

      const orders = await Order.find(options)
         .sort({ _id: -1 })
         .skip(page * 10)
         .limit(amount)
         .populate('givenCurrency')
         .populate('takenCurrency');

      res.status(200).json({ msg: 'Orders fetched successfully', orders });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.getOrder = async (req, res, next) => {
   try {
      const id = req.params.id;
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Order not found');
         error.statusCode = 404;
         return next(error);
      }

      const order = await Order.findById(id)
         .populate('givenCurrency')
         .populate('takenCurrency');
      if (!order) {
         const error = new Error('Order not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({ msg: 'Order successfully fetched', order });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.getActiveOrder = async (req, res, next) => {
   try {
      const id = req.params.id;
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Order not found');
         error.statusCode = 404;
         return next(error);
      }

      const order = await Order.findOne({
         _id: id,
         date: {
            $gt: new Date(Date.now() - 15 * 60 * 1000),
         },
      })
         .populate('givenCurrency')
         .populate('takenCurrency');

      if (!order) {
         const error = new Error('Order not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({ msg: 'Order successfully fetched', order });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.updateOrders = async (req, res, next) => {
   try {
      const ids = req.body.ids;
      const status = req.body.status;
      if (ids.length === 0 || !status) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      await Order.updateMany(
         { _id: { $in: ids } },
         { $set: { status } },
         { multi: true }
      );

      res.status(200).json({ msg: 'orders updated successfully' });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.deleteOrders = async (req, res, next) => {
   try {
      const ids = req.body;
      if (ids.length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      await Order.deleteMany({ _id: { $in: ids } });

      res.status(200).json({ msg: 'orders deleted successfully' });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

schedule.scheduleJob('* * * * *', async () => {
   await Order.updateMany(
      {
         date: {
            $lt: new Date(Date.now() - 15 * 60 * 1000),
         },
         status: 'pending',
      },
      { $set: { status: 'canceled' } }
   );
});
