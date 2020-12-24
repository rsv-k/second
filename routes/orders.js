const express = require('express');
const router = express.Router();
const {
   getOrders,
   getOrder,
   createOrder,
   updateOrders,
   deleteOrders,
   cancelOrder,
   isActiveOrder,
} = require('../controllers/orders');
const rateLimitMiddleware = require('../middlewares/rate-limit');

router.get('', getOrders);
router.get('/:id', getOrder);
router.post('', rateLimitMiddleware, createOrder);
router.put('/updateManyById', updateOrders);
router.post('/deleteManyById', deleteOrders);
router.get('/cancelOrder/:id', cancelOrder);
router.get('/isActiveOrder/:id', isActiveOrder);

module.exports = router;
