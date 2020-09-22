const express = require("express");
const app = express();
const errorHandler = require("./middlewares/error");
const currencyRoutes = require("./routes/currency");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/currency", currencyRoutes);

app.use(errorHandler);

module.exports = app;
