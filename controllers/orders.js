const Order = require('../models/order');
const Exchange = require('../models/exchange');
const schedule = require('node-schedule');
const mongoose = require('mongoose');
const webmoneyStatisticsHelper = require('../utils/webmoneyStatistics');
const asyncHandler = require('../middleware/async');

//@desc     Get all orders
//@route    GET api/v1/orders
//@access   Private
exports.getOrders = asyncHandler(async (req, res, next) => {
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

   if (req.query.id) {
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

   res.status(200).json({ status: true, data: orders });
});

//@desc     Get order
//@route    GET api/v1/orders/:id
//@access   Public
exports.getOrder = asyncHandler(async (req, res, next) => {
   const id = req.params.id;

   const order = await Order.findById(id)
      .populate('givenCurrency')
      .populate('takenCurrency')
      .populate('merchant');
   if (!order) {
      const error = new Error('Order not found');
      error.statusCode = 404;
      return next(error);
   }

   res.status(200).json({ status: true, data: order });
});

//@desc     Create new order
//@route    POST api/v1/orders
//@access   Public
exports.createOrder = asyncHandler(async (req, res, next) => {
   const body = req.body;

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

   res.status(200).json({ status: true, data: order });
});

//@desc     Check if order is still active
//@route    GET api/v1/orders/isOrderActive
//@access   Public
exports.isActiveOrder = asyncHandler(async (req, res, next) => {
   const id = req.params.id;

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
      status: true,
      data: true,
   });
});

//@desc     Update orders
//@route    PUT api/v1/orders/:ids
//@access   Public
exports.updateOrders = asyncHandler(async (req, res, next) => {
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

   res.status(200).json({ status: true, data: orders });
});

//@desc     Cancel order
//@route    PATCH api/v1/orders/:id
//@access   Public
exports.cancelOrder = asyncHandler(async (req, res, next) => {
   const id = req.params.id;

   const order = await Order.findByIdAndUpdate(
      id,
      {
         $set: { status: 'canceled' },
      },
      { multi: true }
   );

   if (!order) {
      const error = new Error('Order not found');
      error.statusCode = 404;
      return next(error);
   }

   res.status(200).json({ status: true });
});

//@desc     Delete orders
//@route    DELETE api/v1/orders/:ids
//@access   Private
exports.deleteOrders = asyncHandler(async (req, res, next) => {
   const ids = req.body;

   await Order.deleteMany({ _id: { $in: ids } });

   res.status(200).json({ status: true, data: ids });
});

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
