const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const entryPoint = require('./entryPoint');
const morgan = require('morgan');

if (!process.env.production) {
   require('dotenv').config();
}

app.use(morgan('dev'));
app.use(entryPoint);

mongoose
   .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log('db connected');
      app.listen(PORT);
   });
