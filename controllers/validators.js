const Validator = require('../models/validator');
const asyncHandler = require('../middleware/async');

//@desc     Create new validator
//@route    POST api/v1/validators
//@access   Private
exports.createValidator = asyncHandler(async (req, res, next) => {
   let validator = new Validator(req.body);
   validator = await validator.save();

   res.status(201).json({
      status: true,
      data: validator,
   });
});

//@desc     Get all validators
//@route    GET api/v1/validators
//@access   Private
exports.getValidators = asyncHandler(async (req, res, next) => {
   const validators = await Validator.find();

   res.status(200).json({
      status: true,
      data: validators,
   });
});

//@desc     Delete validator
//@route    DELETE api/v1/validators/:id
//@access   Private
exports.deleteValidator = asyncHandler(async (req, res, next) => {
   const id = req.params.id;

   const validator = await Validator.findByIdAndDelete(id);
   if (!validator) {
      const error = new Error('Validator not found');
      error.statusCode = 404;
      return next(error);
   }

   res.status(200).json({
      status: true,
      data: validator,
   });
});

//@desc     Update validator
//@route    PUT api/v1/validators/:id
//@access   Private
exports.editValidator = asyncHandler(async (req, res, next) => {
   const id = req.params.id;

   let validator = await Validator.findByIdAndUpdate(id, req.body, {
      new: true,
   });
   if (!validator) {
      const error = new Error('Validator not found');
      error.statusCode = 404;
      return next(error);
   }

   res.status(202).json({
      status: true,
      data: validator,
   });
});
