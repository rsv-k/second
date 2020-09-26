const router = require('express').Router();
const exchangeController = require('../controllers/exchange');

router.post('', exchangeController.createExchange);
router.get('', exchangeController.getExchanges);
router.delete('/:id', exchangeController.deleteExchange);
router.get('/:id', exchangeController.getExchange);

module.exports = router;
