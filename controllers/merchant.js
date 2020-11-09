const merchantHelper = require('../utils/merchant');

exports.webmoney = async (req, res, next) => {
   try {
      const operation = 4;
      const direction = 2;
      const purse = 'WMZ';

      const response = merchantHelper.interfaceX19(
         operation,
         direction,
         purse,
         req.body.givenCurrencyAmount
      );

      res.status(200).json({ result: response });
   } catch (err) {
      next(error);
   }
};
