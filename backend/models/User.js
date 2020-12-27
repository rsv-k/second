const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true,
      match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      unique: true,
   },
   role: {
      type: String,
      enum: ['user'],
      default: 'user',
   },
   password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
   },
   resetPasswordToken: String,
   resetPasswordExpire: Date,
   createdAt: {
      type: Date,
      default: Date.now(),
   },
});

// Encrypt password
UserSchema.pre('save', async function (next) {
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});

// Generate JWT
UserSchema.methods.getSignedJwtToken = function () {
   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
   });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
