const mongoose = require('mongoose');

const ValidatorSchema = new mongoose.Schema({
   name: { type: String, required: true },
   regex: { type: String, required: true },
});

ValidatorSchema.pre('remove', async function (next) {
   await this.model('Currency').updateMany(
      { validator: this._id },
      { validator: null }
   );

   next();
});

module.exports = mongoose.model('Validator', ValidatorSchema);
