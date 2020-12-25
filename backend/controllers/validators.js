const Validator = require('../models/validator');
const mongooseHelper = require('../utils/mongoose');

//@desc     Create new validator
//@route    POST api/v1/validators
//@access   Private
exports.createValidator = async (req, res, next) => {
   try {
      let validator = new Validator(req.body);
      validator = await validator.save();

      res.status(201).json({
         msg: 'validator created successfully',
         validator,
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
      const validators = await Validator.find({});
      if (validators.length === 0) {
         const error = new Error('Validators not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({
         msg: 'validators fetched successfully',
         validators,
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
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Validator not found');
         error.statusCode = 404;
         return next(error);
      }

      const validator = await Validator.findById(id);
      if (!validator) {
         const error = new Error('Validator not found');
         error.statusCode = 404;
         return next(error);
      }

      await validator.remove();

      res.status(200).json({
         msg: 'validator successfully deleted',
         validator,
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
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Validator not found');
         error.statusCode = 404;
         return next(error);
      }

      let validator = await Validator.findById(id);
      if (!validator) {
         const error = new Error('Validator not found');
         error.statusCode = 404;
         return next(error);
      }

      validator = await Validator.findByIdAndUpdate(
         id,
         {
            name: req.body.name,
            regex: req.body.regex,
         },
         { new: true }
      );

      res.status(202).json({
         msg: 'validator successfully updated',
         validator,
      });
   } catch (err) {
      next(err);
   }
};
