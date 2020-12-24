const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const entryPoint = require('./entryPoint');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev logger
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

app.use(entryPoint);

app.listen(
   PORT,
   console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
mongoose
   .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log('db connected');
   });
