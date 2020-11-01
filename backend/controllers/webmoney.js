const axios = require('axios');
const webmoneyStatisticsHelper = require('../utils/webmoneyStatistics');
const webmoneyHelper = require('../utils/webmoney');

exports.isValidInfo = async (req, res, next) => {
   try {
      if (!req.body) {
         const error = new Error('Incomplete data');
         error.status = 422;
         return next(error);
      }

      await webmoneyStatisticsHelper.increaseRequestsAmount();
      const reqn = webmoneyHelper.getReqn();
      const wmid = 224080027036;
      const operation = 4;

      const sign = await webmoneyHelper.getSign(
         reqn + '' + operation + '' + wmid
      );
      console.log(reqn);
      console.log(sign);

      res.send('ok');
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};
