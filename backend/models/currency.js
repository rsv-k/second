const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema({
   name: { type: String, required: true },
   stringId: { type: String, required: true },
   card: { type: String, required: true },
   reserve: { type: Number, required: true },
   currencyCode: { type: String, required: true },
   icon: { type: String, required: true },
   validator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Validator',
      required: false,
   },
});

CurrencySchema.pre('remove', async function (next) {
   await this.model('Exchange').deleteMany({
      $or: [{ givenCurrency: this._id }, { takenCurrency: this._id }],
   });

   next();
});

module.exports = mongoose.model('Currency', CurrencySchema);
