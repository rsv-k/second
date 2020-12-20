const express = require('express');
const app = express();
const errorHandler = require('./middlewares/error');
const path = require('path');

const currencyRoutes = require('./routes/currency');
const exchangeRoutes = require('./routes/exchange');
const orderRoutes = require('./routes/order');
const serviceValidatorsRoutes = require('./routes/serviceValidators');
const validatorRoutes = require('./routes/validator');
const merchantRoutes = require('./routes/merchant');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/', express.static(path.join(__dirname, 'frontend')));

app.use('/api/currency', currencyRoutes);
app.use('/api/exchange', exchangeRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/merchant', serviceValidatorsRoutes);
app.use('/api/validator', validatorRoutes);
app.use('/api/merchant', merchantRoutes);
app.use((req, res, next) => {
   res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.use(errorHandler);

module.exports = app;
