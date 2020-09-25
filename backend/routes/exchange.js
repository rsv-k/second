const router = require('express').Router();
const exchangeController = require('../controllers/exchange');

router.post('', exchangeController.createExchange);

module.exports = router;
