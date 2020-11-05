const express = require('express');
const router = express.Router();
const validatorController = require('../controllers/validator');

router.post('', validatorController.createValidator);

module.exports = router;
