const express = require("express");
const router = express.Router();
const currencyController = require("../controllers/currency");
const multerMiddleware = require("../middlewares/multer");

router.post("", multerMiddleware, currencyController.createCurrency);

module.exports = router;
