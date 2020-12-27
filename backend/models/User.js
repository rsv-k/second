const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true,
      match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      unique: true,
   },
   role: {
      type: String,
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

module.exports = mongoose.model('User', UserSchema);
