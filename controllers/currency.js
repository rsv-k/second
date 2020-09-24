const Currency = require('../models/currency');
const fileHelper = require('../utils/file');
const mongoose = require('mongoose');

exports.createCurrency = async (req, res, next) => {
   try {
      const body = JSON.parse(req.body.data);
      if (Object.keys(body).length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      const currency = new Currency({
         ...body,
         icon: req.file.path,
      });

      await currency.save();

      res.status(201).json({ msg: 'currency created successfully', currency });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.getCurrencies = async (req, res, next) => {
   try {
      const currencies = await Currency.find();
      if (currencies.length === 0) {
         const error = new Error('Not found');
         error.statusCode = 404;
         return next(error);
      }

      const currenciesAmount = await Currency.countDocuments({});

      res.status(200).json({
         msg: 'currencies fetched successfully',
         currencies,
         currenciesAmount,
      });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.deleteCurrency = async (req, res, next) => {
   try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
         const error = new Error('Not found');
         error.statusCode = 404;
         return next(error);
      }

      const currency = await Currency.findById(id);
      if (!currency) {
         const error = new Error('Not found');
         error.statusCode = 404;
         return next(error);
      }

      await currency.remove();
      fileHelper.deleteFile(currency.icon);

      res.status(200).json({ msg: 'Currency successfully deleted', currency });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

exports.getCurrency = async (req, res, next) => {
   try {
      if (!req.params.id) {
         const error = new Error('Currency not found');
         error.statusCode = 404;
         return next(error);
      }

      const currency = await Currency.findById(req.params.id);
      if (!currency) {
         const error = new Error('Not found');
         error.statusCode = 404;
         return next(error);
      }
      res.status(200).json({ msg: 'Currency fetched successfully', currency });
   } catch (err) {
      const error = new Error('Internal server error');

      next(error);
   }
};

exports.updateCurrency = async (req, res, next) => {
   try {
      const id = req.params.id;
      const body = JSON.parse(req.body.data);
      if (!mongoose.Types.ObjectId.isValid(id)) {
         const error = new Error('Currency not found');
         error.statusCode = 404;
         return next(error);
      }

      if (Object.keys(body).length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      let currency = await Currency.findById(id);

      if (!currency) {
         const error = new Error('Currency not found');
         error.statusCode = 404;
         return next(error);
      }

      if (req.file) {
         fileHelper.deleteFile(currency.icon);
         body.icon = req.file.path;
      }

      currency = await Currency.findByIdAndUpdate(id, body, { new: true });

      res.status(202).json({ msg: 'Currency updated successfully', currency });
   } catch (err) {
      const error = new Error('Internal server error');

      next(error);
   }
};
