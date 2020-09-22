const express = require('express');
const app = express();
const errorHandler = require('./middlewares/error');
const currencyRoutes = require('./routes/currency');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/images', express.static(path.join('images')));

app.use('/api/currency', currencyRoutes);

app.use(errorHandler);

module.exports = app;
