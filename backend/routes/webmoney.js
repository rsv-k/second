const express = require('express');
const router = express.Router();
const webmoneyController = require('../controllers/webmoney');

router.post('', webmoneyController.isValidInfo);

module.exports = router;
