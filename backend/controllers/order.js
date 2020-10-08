const Order = require('../models/order');
const io = require('../socketio');

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

exports.getCurrencies = async (req, res, next) => {
   try {
      const orders = await Order.find({})
         .populate('givenCurrency')
         .populate('takenCurrency');
      if (!orders.length) {
         const error = new Error('Orders not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({ msg: 'Orders fetched successfully', orders });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};
