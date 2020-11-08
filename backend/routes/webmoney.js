const express = require('express');
const router = express.Router();
const webmoneyController = require('../controllers/webmoney');
const orderValidator = require('../validators/order');

router.post(
   '',
   orderValidator.checkBodyCorrection,
   webmoneyController.isValidInfo
);

module.exports = router;
