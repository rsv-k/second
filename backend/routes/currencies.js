const express = require('express');
const router = express.Router();
const multerMiddleware = require('../middleware/multer');

const {
   getCurrencies,
   getCurrency,
   createCurrency,
   updateCurrency,
   deleteCurrency,
} = require('../controllers/currencies');

router.get('', getCurrencies);
router.get('/:id', getCurrency);
router.post('', multerMiddleware, createCurrency);
router.put('/:id', multerMiddleware, updateCurrency);
router.delete('/:id', deleteCurrency);

module.exports = router;
