const express = require('express');
const app = express();
const errorHandler = require('./middlewares/error');
const path = require('path');

const currencyRoutes = require('./routes/currency');
const exchangeRoutes = require('./routes/exchange');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/images', express.static(path.join('images')));

app.use('/api/currency', currencyRoutes);
app.use('/api/exchange', exchangeRoutes);

app.use(errorHandler);

module.exports = app;
