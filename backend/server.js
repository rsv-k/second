const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const colors = require('colors');
const path = require('path');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const PORT = process.env.PORT || 3000;

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Routes
const currencyRoutes = require('./routes/currencies');
const exchangeRoutes = require('./routes/exchanges');
const orderRoutes = require('./routes/orders');
const serviceValidatorsRoutes = require('./routes/serviceValidators');
const validatorRoutes = require('./routes/validators');
const merchantRoutes = require('./routes/merchants');
const authRoutes = require('./routes/auth');

// Dev logger
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

app.use('/images', express.static(path.join('images')));

app.use('/api/v1/currencies', currencyRoutes);
app.use('/api/v1/exchanges', exchangeRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/serviceValidators', serviceValidatorsRoutes);
app.use('/api/v1/validators', validatorRoutes);
app.use('/api/v1/merchants', merchantRoutes);
app.use('/api/v1/auth', authRoutes);

app.use(errorHandler);

const server = app.listen(
   PORT,
   console.log(
      `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
         .bold
   )
);

// Connect to database
connectDB();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
   console.log(`Error: ${err.message}`.red);
   // Close server & exit process
   server.close(() => process.exit(1));
});
