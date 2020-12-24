const express = require('express');
const app = express();
const errorHandler = require('./middlewares/error');
const path = require('path');

const currencyRoutes = require('./routes/currencies');
const exchangeRoutes = require('./routes/exchanges');
const orderRoutes = require('./routes/orders');
const serviceValidatorsRoutes = require('./routes/serviceValidators');
const validatorRoutes = require('./routes/validators');
const merchantRoutes = require('./routes/merchants');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/images', express.static(path.join('images')));

app.use('/api/v1/currencies', currencyRoutes);
app.use('/api/v1/exchanges', exchangeRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/serviceValidators', serviceValidatorsRoutes);
app.use('/api/v1/validators', validatorRoutes);
app.use('/api/v1/merchants', merchantRoutes);

app.use(errorHandler);

module.exports = app;
