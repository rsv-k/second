const Order = require('../models/order');
const Exchange = require('../models/exchange');
const schedule = require('node-schedule');
const mongooseHelper = require('../utils/mongoose');
const mongoose = require('mongoose');
const webmoneyStatisticsHelper = require('../utils/webmoneyStatistics');

//@desc     Get all orders
//@route    GET api/v1/orders
//@access   Private
exports.getOrders = async (req, res, next) => {
   try {
      let page = +req.query.page - 1;
      const amount = 10;
      let options = {};
      if (req.query.status) {
         options = {
            status: new RegExp('^' + req.query.status),
         };
      }

      if (req.query.number > 0) {
         options = {
            ...options,
            number: req.query.number,
         };
      }

      if (req.query.givenCurrency) {
         options = {
            ...options,
            givenCurrency: mongoose.Types.ObjectId(req.query.givenCurrency),
         };
      }

      if (req.query.takenCurrency) {
         options = {
            ...options,
            takenCurrency: mongoose.Types.ObjectId(req.query.takenCurrency),
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

      if (options._id || options.number) {
         page = 0;
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

//@desc     Get order
//@route    GET api/v1/orders/:id
//@access   Public
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
         .populate('takenCurrency')
         .populate('merchant');
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

//@desc     Create new order
//@route    POST api/v1/orders
//@access   Public
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

      res.status(200).json({ msg: 'Order created successfully', order });
   } catch (err) {
      console.log(err);
      const error = new Error('Internal server error');
      next(error);
   }
};

//@desc     Check if order is still active
//@route    GET api/v1/orders/isOrderActive
//@access   Public
exports.isActiveOrder = async (req, res, next) => {
   try {
      const id = req.params.id;
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Order not found');
         error.statusCode = 404;
         return next(error);
      }

      const minutes = 15 * 60 * 1000;

      const order = await Order.findOne({
         _id: id,
         date: {
            $gt: new Date(Date.now() - minutes),
         },
      });

      if (!order) {
         const error = new Error('Order not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({
         msg: 'Order successfully fetched',
         isActive: true,
      });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

//@desc     Update order
//@route    PUT api/v1/orders/:id
//@access   Public
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

      const orders = await Order.find({
         _id: { $in: ids },
      })
         .populate('givenCurrency')
         .populate('takenCurrency');

      res.status(200).json({ msg: 'orders updated successfully', orders });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

//@desc     Cancel order
//@route    PATCH api/v1/orders/:id
//@access   Public
exports.cancelOrder = async (req, res, next) => {
   try {
      const id = req.params.id;

      const order = await Order.findByIdAndUpdate(
         id,
         {
            $set: { status: 'canceled' },
         },
         { multi: true }
      );

      res.status(200).json({ msg: 'orders updated successfully' });
   } catch (err) {
      next(err);
   }
};

//@desc     Delete order
//@route    DELETE api/v1/orders/:id
//@access   Private
exports.deleteOrders = async (req, res, next) => {
   try {
      const ids = req.body;
      if (ids.length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      await Order.deleteMany({ _id: { $in: ids } });

      res.status(200).json({ msg: 'orders deleted successfully', ids });
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
