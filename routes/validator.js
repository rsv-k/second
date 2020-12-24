const express = require('express');
const router = express.Router();
const {
   getValidators,
   createValidator,
   editValidator,
   deleteValidator,
} = require('../controllers/validators');
const validator = require('../validators/validator');
const validationResultMiddleware = require('../middlewares/validationResult');

router.get('', getValidators);
router.post('', validator.createValidator, createValidator);
router.put(
   '/:id',
   validator.createValidator,
   validationResultMiddleware,
   editValidator
);
router.delete('/:id', deleteValidator);

module.exports = router;
