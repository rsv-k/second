const mongoose = require('mongoose');

module.exports = mongoose.model(
   'Merchant',
   new mongoose.Schema({
      name: { type: String, required: true },
      link: { type: String, required: true },
   })
);
