const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      const error = new Error('invalid body');
      error.statusCode = 422;
      return next(error);
   }

   next();
};
