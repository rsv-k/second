const axios = require('axios');
const webmoneyStatisticsHelper = require('../utils/webmoneyStatistics');

exports.isValidInfo = async (req, res, next) => {
   try {
      if (!req.body) {
         const error = new Error('Incomplete data');
         error.status = 422;
         return next(error);
      }

      await webmoneyStatisticsHelper.increaseRequestsAmount();
      const webmoneyStatistics = await webmoneyStatisticsHelper.getWebmoneyStatistics();

      const result = await axios.post(
         'https://apipassport.webmoney.ru/XMLCheckUser.aspx',
         `
         <?xml version="1.0" encoding="UTF-8"?>
      <passport.request>
         <reqn>1</reqn>
         <signerwmid>Z303845251746</signerwmid>
         <sign>//1//4//Z303845251746</sign>
         <operation>
               <type>4</type>
               <direction>1</direction>
               <pursetype>WMZ</pursetype>
               <amount>12.08</amount>
               <id>1</id>
         </operation>
         <userinfo>
               <wmid>Z303845251746</wmid>
               <fname>Иван</fname>
               <iname>Борисенко</iname>
               <bank_name>Приватбанк</bank_name>
               <card_number>5375411400215278</card_number>
         </userinfo>
      </passport.request>`,
         { headers: { 'Content-Type': 'text/xml' } }
      );

      // console.log(result.data);

      res.status(200).json({ result: true });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};
