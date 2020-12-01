const mongoose = require('mongoose');

module.exports = mongoose.model(
   'Exchange',
   new mongoose.Schema({
      givenCurrency: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Currency',
         required: true,
      },
      takenCurrency: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Currency',
         required: true,
      },
      givenCurrencyCourse: { type: Number, required: true, min: 0 },
      takenCurrencyCourse: { type: Number, required: true, min: 0 },
      maxGivenCurrency: { type: Number, required: false },
      maxTakenCurrency: { type: Number, required: false },
      minGivenCurrency: { type: Number, required: false },
      minTakenCurrency: { type: Number, required: false },
      comment: { type: String, required: false },
      isActive: { type: Boolean, default: false },
      fields: { type: [String], require: false },
   })
);
