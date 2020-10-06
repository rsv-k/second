const Order = require('../models/order');

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

      const order = new Order(body);
      await order.save();

      res.status(200).json({ msg: 'Order created successfully', order });
   } catch (err) {
      console.log(err);
      const error = new Error('Internal server error');
      next(error);
   }
};
