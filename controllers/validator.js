const Validator = require('../models/validator');
const { validationResult } = require('express-validator');

exports.createValidator = async (req, res, next) => {
   try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
         const error = new Error('Incomplete or incorrect data');
         error.statusCode = 422;
         return next(error);
      }
      let validator = new Validator(req.body);
      validator = await validator.save();

      res.status(200).json({
         msg: 'validator created successfully',
         validator,
      });
   } catch (err) {
      next(err);
   }
};
