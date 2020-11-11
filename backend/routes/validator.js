const express = require('express');
const router = express.Router();
const validatorController = require('../controllers/validator');
const validator = require('../validators/validator');
const validationResultMiddleware = require('../middlewares/validationResult');

router.post('', validator.createValidator, validatorController.createValidator);
router.get('', validatorController.getValidators);
router.delete('/:id', validatorController.deleteValidator);
router.put(
   '/:id',
   validator.createValidator,
   validationResultMiddleware,
   validatorController.editValidator
);

module.exports = router;
