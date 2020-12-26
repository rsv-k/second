const express = require('express');
const router = express.Router();
const { webmoney } = require('../controllers/serviceValidators');

router.post('/webmoney', webmoney);

module.exports = router;
