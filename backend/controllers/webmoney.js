const axios = require('axios');
const webmoneyHelper = require('../utils/webmoney');
const xml2js = require('xml2js');

exports.isValidInfo = async (req, res, next) => {
   try {
      if (!req.body) {
         const error = new Error('Incomplete data');
         error.status = 422;
         return next(error);
      }

      const reqn = webmoneyHelper.getReqn();
      const wmid = 224080027036;
      const operation = 4;
      const direction = 2;
      const purse = 'WMZ';
      const amount = 12;
      const sign = await webmoneyHelper.getSign(
         reqn + '' + operation + '' + wmid
      );

      const result = await axios.post(
         'https://apipassport.webmoney.ru/XMLCheckUser.aspx',
         `
         <passport.request>
            <reqn>${reqn}</reqn>
               <lang>en</lang>
            <signerwmid>${wmid}</signerwmid>
            <sign>${sign}</sign>
            <operation>
               <type>${operation}</type>
               <direction>${direction}</direction>
               <pursetype>${purse}</pursetype>
               <amount>${amount}</amount>
            </operation>
            <userinfo>
               <wmid>${wmid}</wmid>
               <fname>Антіфоров</fname>
               <iname>Олександр</iname>
               <bank_name>Приват</bank_name>
               <card_number>5375411400215278</card_number>
            </userinfo>
         </passport.request>
         `,
         { headers: { 'Content-Type': 'application/xml' } }
      );

      const json = await xml2js.parseStringPromise(result.data);
      const response = !+json['passport.response']['retval'][0];

      res.status(200).json({ result: response });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};
