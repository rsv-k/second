const express = require('express');
const router = express.Router();
const { webmoney } = require('../controllers/serviceValidators');
const orderValidator = require('../validators/order');
const validationResultMiddleware = require('../middlewares/validationResult');

router.post(
   '/webmoney',
   orderValidator.checkBodyCorrection,
   validationResultMiddleware,
   webmoney
);

module.exports = router;
