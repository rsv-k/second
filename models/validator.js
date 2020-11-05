const mongoose = require('mongoose');

module.exports = mongoose.model(
   'Validator',
   new mongoose.Schema({
      name: { type: String, required: true },
      regex: { type: String, required: true },
   })
);
