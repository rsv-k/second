const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');
const rateLimitMiddleware = require('../middlewares/rate-limit');

router.post('', rateLimitMiddleware, orderController.createOrder);
router.get('', orderController.getOrders);
router.get('/:id', orderController.getOrder);
router.post('/deleteManyById', orderController.deleteOrders);
router.put('/updateManyById', orderController.updateOrders);

module.exports = router;
