const mongoose = require('mongoose');

module.exports = mongoose.model(
   'WebmoneyStatistics',
   new mongoose.Schema({
      ordersAmount: { type: Number, default: 0 },
   })
);
