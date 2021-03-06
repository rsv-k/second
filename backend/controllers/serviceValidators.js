const serviceValidatorsHelper = require('../utils/serviceValidators');
const asyncHandler = require('../middleware/async');

//@desc     Validate order in webmoney system
//@route    POST api/v1/serviceValidators/webmoney
//@access   Public
exports.webmoney = asyncHandler(async (req, res, next) => {
   const operation = 4;
   const direction = 2;
   const purse = 'WMZ';

   const userWMID = await serviceValidatorsHelper.interfaceX8();
   if (!userWMID) {
      const error = new Error('Invalid webmoney purse');
      error.statusCode = 422;
      return next(error);
   }

   const response = await serviceValidatorsHelper.interfaceX19(
      operation,
      direction,
      purse,
      req.body.givenCurrencyAmount
   );

   res.status(200).json({ result: response });
});
