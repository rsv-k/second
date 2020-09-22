const express = require("express");
const router = express.Router();
const currencyController = require("../controllers/currency");

router.post("", currencyController.createCurrency);

module.exports = router;
