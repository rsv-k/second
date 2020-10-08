const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const entryPoint = require('./entryPoint');

if (!process.env.production) {
   require('dotenv').config();
}

app.use(entryPoint);

mongoose
   .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log('db connected');
      const server = app.listen(PORT);
      const io = require('./socketio').init(server);

      io.on('connection', (socket) => {
         console.log('client connected');
      });
   });
