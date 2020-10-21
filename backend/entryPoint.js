const express = require('express');
const app = express();
const errorHandler = require('./middlewares/error');
const path = require('path');

const currencyRoutes = require('./routes/currency');
const exchangeRoutes = require('./routes/exchange');
const orderRoutes = require('./routes/order');
const webmoneyRoutes = require('./routes/webmoney');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/images', express.static(path.join('images')));

app.use('/api/currency', currencyRoutes);
app.use('/api/exchange', exchangeRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/webmoney', webmoneyRoutes);

app.use(errorHandler);

module.exports = app;
