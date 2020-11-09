const express = require('express');
const router = express.Router();
const merchantController = require('../controllers/merchant');
const orderValidator = require('../validators/order');

router.post(
   'webmoney',
   orderValidator.checkBodyCorrection,
   merchantController.webmoney
);

module.exports = router;
