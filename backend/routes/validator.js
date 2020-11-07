const express = require('express');
const router = express.Router();
const validatorController = require('../controllers/validator');
const validator = require('../validators/validator');

router.post('', validator.createValidator, validatorController.createValidator);
router.get('', validatorController.getValidators);
router.delete('/:id', validatorController.deleteValidator);
router.put(
   '/:id',
   validator.createValidator,
   validatorController.editValidator
);

module.exports = router;
