const Validator = require('../models/validator');

exports.createValidator = async (req, res, next) => {
   try {
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
