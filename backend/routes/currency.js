const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currency');
const multerMiddleware = require('../middlewares/multer');

router.post('', multerMiddleware, currencyController.createCurrency);
router.get('', currencyController.getCurrencies);
router.delete('/:id', currencyController.deleteCurrency);
router.get('/:id', currencyController.getCurrency);
router.put('/:id', multerMiddleware, currencyController.updateCurrency);

module.exports = router;
