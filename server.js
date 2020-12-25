const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const PORT = process.env.PORT || 3000;
const entryPoint = require('./entryPoint');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev logger
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(entryPoint);

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
