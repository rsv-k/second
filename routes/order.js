const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

router.post('', orderController.createOrder);
router.get('', orderController.getCurrencies);

module.exports = router;
