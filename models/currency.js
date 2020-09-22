const mongoose = require("mongoose");

module.exports.mongoose(
   "Currency",
   new mongoose.Schema({
      name: { type: String, required: true },
      stringId: { type: String, required: true },
      card: { type: String, required: true },
      reserve: { type: Number, required: true },
      currencyCode: { type: String, required: true },
      icon: { type: String, required: true },
   })
);
