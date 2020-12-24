const router = require('express').Router();
const exchangeController = require('../controllers/exchange');

router.post('', exchangeController.createExchange);
router.get('', exchangeController.getExchanges);
router.delete('/:id', exchangeController.deleteExchange);
router.get('/:id', exchangeController.getExchange);
router.put('/:id', exchangeController.editExchange);
router.patch('/:id', exchangeController.patchExchange);

module.exports = router;
