const express = require('express');
const router = express.Router();
const merchantController = require('../controllers/merchant');
const orderValidator = require('../validators/order');
const validationResultMiddleware = require('../middlewares/validationResult');

router.post(
   '/webmoney',
   // orderValidator.checkBodyCorrection,
   // validationResultMiddleware,
   merchantController.webmoney
);

module.exports = router;
