const User = require('../models/User');
const asyncHandler = require('../middleware/async');

//@desc     Register user
//@route    Post api/v1/auth/register
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
