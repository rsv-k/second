const router = require('express').Router();
const exchangeController = require('../controllers/exchange');

router.post('', exchangeController.createExchange);
router.get('', exchangeController.getExchanges);

module.exports = router;
