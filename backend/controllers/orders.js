const Order = require('../models/order');
const Exchange = require('../models/exchange');
const schedule = require('node-schedule');
const asyncHandler = require('../middleware/async');

//@desc     Get all orders
//@route    GET api/v1/orders
//@access   Private
exports.getOrders = asyncHandler(async (req, res, next) => {
   let page = parseInt(req.query.page, 10) || 1;
   let limit = parseInt(req.query.limit, 10) || 10;
   delete req.query.page;
   delete req.query.limit;

   let options = {
      ...req.query,
   };

   if (req.query.number) {
      options = {
         number: req.query.number,
      };
   }

   if ((await Order.countDocuments()) < page * 10) {
      page--;
   }

   const orders = await Order.find(options)
      .sort({ _id: -1 })
      .skip((page - 1) * 10)
      .limit(limit)
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
      givenCurrency: body.givenCurrency,
      takenCurrency: body.takenCurrency,
   });
   if (!exchange || !exchange.isActive) {
      const error = new Error('Active exchange not found');
      error.statusCode = 404;
      return next(error);
   }

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
