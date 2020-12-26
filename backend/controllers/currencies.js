const Currency = require('../models/currency');
const fileHelper = require('../utils/file');
const asyncHandler = require('../middleware/async');

//@desc     Get all currencies
//@route    GET api/v1/currencies
//@access   Private
exports.getCurrencies = asyncHandler(async (req, res, next) => {
   const currencies = await Currency.find();

   res.status(200).json({
      status: true,
      data: currencies,
   });
});

//@desc     Get currency
//@route    GET api/v1/currencies/:id
//@access   Private
exports.getCurrency = asyncHandler(async (req, res, next) => {
   const id = req.params.id;

   const currency = await Currency.findById(id);
   if (!currency) {
      const error = new Error('Not found');
      error.statusCode = 404;
      return next(error);
   }

   res.status(200).json({ status: true, data: currency });
});

//@desc     Create new currency
//@route    POST api/v1/currencies
//@access   Private
exports.createCurrency = asyncHandler(async (req, res, next) => {
   const body = JSON.parse(req.body.data);

   const currency = new Currency({
      ...body,
      icon: req.file.path,
   });

   await currency.save();

   res.status(201).json({ status: true, data: currency });
});

//@desc     Delete currency
//@route    DELETE api/v1/currencies/:id
//@access   Private
exports.deleteCurrency = asyncHandler(async (req, res, next) => {
   const id = req.params.id;

   const currency = await Currency.findById(id);
   if (!currency) {
      const error = new Error('Not found');
      error.statusCode = 404;
      return next(error);
   }

   await currency.remove();
   fileHelper.deleteFile(currency.icon);

   res.status(200).json({ status: true, data: currency });
});

//@desc     Update currency
//@route    PUT api/v1/currencies/:id
//@access   Private
exports.updateCurrency = asyncHandler(async (req, res, next) => {
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
});
