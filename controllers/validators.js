const Validator = require('../models/validator');

//@desc     Create new validator
//@route    POST api/v1/validators
//@access   Private
exports.createValidator = async (req, res, next) => {
   try {
      let validator = new Validator(req.body);
      validator = await validator.save();

      res.status(201).json({
         status: true,
         data: validator,
      });
   } catch (err) {
      next(err);
   }
};

//@desc     Get all validators
//@route    GET api/v1/validators
//@access   Private
exports.getValidators = async (req, res, next) => {
   try {
      const validators = await Validator.find();

      res.status(200).json({
         status: true,
         data: validators,
      });
   } catch (err) {
      next(err);
   }
};

//@desc     Delete validator
//@route    DELETE api/v1/validators/:id
//@access   Private
exports.deleteValidator = async (req, res, next) => {
   try {
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
   } catch (err) {
      next(err);
   }
};

//@desc     Update validator
//@route    PUT api/v1/validators/:id
//@access   Private
exports.editValidator = async (req, res, next) => {
   try {
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
   } catch (err) {
      next(err);
   }
};
