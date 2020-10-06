const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

router.post('', orderController.createOrder);

module.exports = router;
