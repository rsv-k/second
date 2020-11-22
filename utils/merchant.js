const axios = require('axios');
const webmoneyHelper = require('../utils/webmoney');
const xml2js = require('xml2js');
const signerWMID = process.env.SIGNERWMID;

module.exports.interfaceX19 = async (
   operation,
   direction,
   purse,
   amount,
   userWMID
) => {
   const reqn = webmoneyHelper.getReqn();
   const sign = await webmoneyHelper.getSign(reqn + '' + operation + '' + wmid);

   const result = await axios.post(
      'https://apipassport.webmoney.ru/XMLCheckUser.aspx',
      `
      <passport.request>
         <reqn>${reqn}</reqn>
            <lang>en</lang>
         <signerwmid>${signerWMID}</signerwmid>
         <sign>${sign}</sign>
         <operation>
            <type>${operation}</type>
            <direction>${direction}</direction>
            <pursetype>${purse}</pursetype>
            <amount>${amount}</amount>
         </operation>
         <userinfo>
            <wmid>${userWMID || signerWMID}</wmid>
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

   return response;
};
