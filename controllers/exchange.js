const Exchange = require('../models/exchange');

exports.createExchange = async (req, res, next) => {
   try {
      const body = req.body;

      if (Object.keys(body).length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      const exchange = new Exchange(body);
      await exchange.save();

      res.status(201).json({
         msg: 'exchange created successfully',
         exchange: exchange.populate('givenCurrency').populate('takenCurrency'),
      });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};
