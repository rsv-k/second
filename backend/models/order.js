const mongoose = require('mongoose');

module.exports = mongoose.model(
   'Order',
   new mongoose.Schema({
      givenCurrencyAmount: { type: Number, required: true, min: 0 },
      takenCurrencyAmount: { type: Number, required: true, min: 0 },
      givenCurrencyCard: { type: String, required: true },
      takenCurrencyCard: { type: String, required: true },
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
      date: { type: Date, default: Date.now },
      status: { type: String, enum: ['canceled', 'pending', 'paid'] },
   })
);
