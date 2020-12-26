const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
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
   phone: { type: String, required: true },
   email: { type: String, required: true },
   name: { type: String, required: false },
   surname: { type: String, required: false },
   number: { type: Number, required: false },
   status: {
      type: String,
      enum: ['freezed', 'canceled', 'pending', 'paid', 'done'],
      default: 'pending',
   },
   merchant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Merchant',
      required: false,
   },
   givenCurrencyCourse: { type: Number, required: true },
   takenCurrencyCourse: { type: Number, required: true },
});

OrderSchema.pre('save', async function (next) {
   const lastOrder = await this.model('Order')
      .findOne()
      .sort({ date: -1 })
      .limit(1);

   this.number = ((lastOrder ? lastOrder.number : 0) || 0) + 1;
   next();
});

module.exports = mongoose.model('Order', OrderSchema);
