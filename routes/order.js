const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');
const rateLimitMiddleware = require('../middlewares/rate-limit');

router.post('', rateLimitMiddleware, orderController.createOrder);
router.get('', orderController.getCurrencies);

module.exports = router;
