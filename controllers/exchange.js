const Exchange = require('../models/exchange');
const mongooseHelper = require('../utils/mongoose');

exports.getExchanges = async (req, res, next) => {
   try {
      const exchanges = await Exchange.find({})
         .populate('givenCurrency')
         .populate('takenCurrency');
      if (exchanges.length === 0) {
         const error = new Error('Exchanges not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({
         msg: 'exchanges fetched successfully',
         exchanges,
      });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.createExchange = async (req, res, next) => {
   try {
      const body = req.body;

      if (Object.keys(body).length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      body.givenCurrency = body.givenCurrencyId;
      body.takenCurrency = body.takenCurrencyId;
      delete body.givenCurrencyId;
      delete body.takenCurrencyId;

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

exports.deleteExchange = async (req, res, next) => {
   try {
      const id = req.params.id;
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      const exchange = await Exchange.findById(id);

      if (!exchange) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      await exchange.remove();

      res.status(200).json({ msg: 'Exchange deleted successfully', exchange });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.getExchange = async (req, res, next) => {
   try {
      const id = req.params.id;
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      const exchange = await Exchange.findById(id)
         .populate('takenCurrency')
         .populate('givenCurrency');
      if (!exchange) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({
         msg: 'Exchange successfully fetched',
         exchange,
      });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.editExchange = async (req, res, next) => {
   try {
      const id = req.params.id;
      const body = req.body;
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      if (Object.keys(body).length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      let exchange = await Exchange.findById(id);
      if (!exchange) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      exchange = await Exchange.findByIdAndUpdate(id, body, { new: true })
         .populate('takenCurrency')
         .populate('givenCurrency');

      res.status(200).json({ msg: 'Exchange updated successfully', exchange });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};
