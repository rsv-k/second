const User = require('../models/User');
const asyncHandler = require('../middleware/async');

//@desc     Register user
//@route    POST api/v1/auth/register
//@access   Public
exports.register = asyncHandler(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await User.create({
      email,
      password,
   });

   res.status(200).json({
      status: true,
   });
});

//@desc     Register user
//@route    POST api/v1/auth/login
//@access   Public
exports.login = asyncHandler(async (req, res, next) => {
   const { email, password } = req.body;

   if (!email || !password) {
      const error = new Error('Please provide and email and password');
      error.statusCode = 400;
      return next(error);
   }

   const user = await User.findOne({ email }).select('+password');

   if (!user) {
      const error = new Error('Invalid credentials');
      error.statusCode = 401;
      return next(error);
   }

   // Check is password matches
   const isMatch = await user.matchPassword(password);

   if (!isMatch) {
      const error = new Error('Invalid credentials');
      error.statusCode = 401;
      return next(error);
   }

   const token = user.getSignedJwtToken();

   res.status(200).json({
      status: true,
      token,
      tokenExpiresIn: process.env.JWT_EXPIRE,
   });
});
