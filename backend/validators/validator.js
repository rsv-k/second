const { body } = require('express-validator');

exports.createValidator = [
   body('name').trim().isLength({ min: 3 }),
   body('regex').trim().isLength({ min: 3 }),
];
