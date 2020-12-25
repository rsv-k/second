const Merchant = require('../models/merchant');
const asyncHandler = require('../middleware/async');

//@desc     Get all merchants
//@route    GET api/v1/merchants
//@access   Private
exports.getMerchants = asyncHandler(async (req, res, next) => {
   const merchants = await Merchant.find();

   res.status(200).json({
      status: true,
      data: merchants,
   });
});

//@desc     Create merchant
//@route    POST api/v1/merchants/:id
//@access   Private
exports.createMerchant = asyncHandler(async (req, res, next) => {
   let merchant = new Merchant(req.body);
   merchant = await merchant.save();

   res.status(201).json({
      status: true,
      data: merchant,
   });
});

//@desc     Delete merchant
//@route    DELETE api/v1/merchants/:id
//@access   Private
exports.deleteMerchant = asyncHandler(async (req, res, next) => {
   const id = req.params.id;

   const merchant = await Merchant.findByIdAndDelete(id);
   if (!merchant) {
      const error = new Error('Merchant not found');
      error.statusCode = 404;
      return next(error);
   }

   res.status(200).json({
      status: true,
      data: merchant,
   });
});

//@desc     Update merchant
//@route    PUT api/v1/merchants/:id
//@access   Private
exports.editMerchant = asyncHandler(async (req, res, next) => {
   const id = req.params.id;

   let merchant = await Merchant.findByIdAndUpdate(id, req.body, {
      new: true,
   });
   if (!merchant) {
      const error = new Error('Merchant not found');
      error.statusCode = 404;
      return next(error);
   }

   res.status(202).json({
      status: true,
      data: merchant,
   });
});
