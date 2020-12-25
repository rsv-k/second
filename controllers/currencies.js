const Currency = require('../models/currency');
const fileHelper = require('../utils/file');

//@desc     Get all currencies
//@route    GET api/v1/currencies
//@access   Private
exports.getCurrencies = async (req, res, next) => {
   try {
      const currencies = await Currency.find();

      res.status(200).json({
         status: true,
         data: currencies,
      });
   } catch (err) {
      next(err);
   }
};

//@desc     Get currency
//@route    GET api/v1/currencies/:id
//@access   Private
exports.getCurrency = async (req, res, next) => {
   try {
      const id = req.params.id;

      const currency = await Currency.findById(id);
      if (!currency) {
         const error = new Error('Not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({ status: true, data: currency });
   } catch (err) {
      next(err);
   }
};

//@desc     Create new currency
//@route    POST api/v1/currencies
//@access   Private
exports.createCurrency = async (req, res, next) => {
   try {
      const body = JSON.parse(req.body.data);

      const currency = new Currency({
         ...body,
         icon: req.file.path,
      });

      await currency.save();

      res.status(201).json({ status: true, data: currency });
   } catch (err) {
      next(err);
   }
};

//@desc     Delete currency
//@route    DELETE api/v1/currencies/:id
//@access   Private
exports.deleteCurrency = async (req, res, next) => {
   try {
      const id = req.params.id;

      const currency = await Currency.findByIdAndDelete(id);
      if (!currency) {
         const error = new Error('Not found');
         error.statusCode = 404;
         return next(error);
      }

      fileHelper.deleteFile(currency.icon);

      res.status(200).json({ status: true, data: currency });
   } catch (err) {
      next(err);
   }
};

//@desc     Update currency
//@route    PUT api/v1/currencies/:id
//@access   Private
exports.updateCurrency = async (req, res, next) => {
   try {
      const id = req.params.id;
      const body = JSON.parse(req.body.data);

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

      res.status(202).json({ status: true, data: currency });
   } catch (err) {
      next(err);
   }
};
