const { body } = require('express-validator');
const Validator = require('../models/validator');
const Currency = require('../models/currency');

exports.checkBodyCorrection = [
   body('givenCurrencyCard').custom(async (value, { req }) => {
      const currency = await Currency.findById(req.body.givenCurrency);
      if (!currency) {
         throw new Error('Given currency does not exist');
      }

      const validator = await Validator.findById(currency.validator);
      if (!validator) {
         throw new Error('Validator does not exist');
      }
      const pattern = new RegExp(validator.pattern);
      const isValidPattern = pattern.test(value);
      if (!isValidPattern) {
         throw new Error('Given currency card is invalid');
      }

      return true;
   }),
   body('takenCurrencyCard').custom(async (value, { req }) => {
      const currency = await Currency.findById(req.body.takenCurrency);
      if (!currency) {
         throw new Error('Taken currency does not exist');
      }

      const validator = await Validator.findById(currency.validator);
      if (!validator) {
         throw new Error('Validator does not exist');
      }

      const pattern = new RegExp(validator.pattern);
      const isValidPattern = pattern.test(value);
      if (!isValidPattern) {
         throw new Error('Taken currency card is invalid');
      }

      return true;
   }),
];
