const axios = require('axios');
const webmoneyHelper = require('../utils/webmoney');
const xml2js = require('xml2js');

module.exports.interfaceX19 = async (
   operation,
   direction,
   purse,
   amount,
   userWMID
) => {
   const reqn = webmoneyHelper.getReqn();
   const signerWMID = process.env.SIGNERWMID;
   const sign = await webmoneyHelper.getSign(
      reqn + '' + operation + '' + signerWMID
   );

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

module.exports.interfaceX8 = async () => {
   const reqn = webmoneyHelper.getReqn();
   const sign = await webmoneyHelper.getSign('Z303845251746');
   const signerWMID = process.env.SIGNERWMID;

   const result = await axios.post(
      'https://w3s.webmoney.ru/asp/XMLFindWMPurseNew.asp',
      `
      <w3s.request>
         <reqn>${reqn}</reqn>
         <wmid>${signerWMID}</wmid>
         <sign>${sign}</sign>
         <testwmpurse>
            <wmid></wmid>
            <purse>Z303845251746</purse>
         </testwmpurse>
      </w3s.request>
      `,
      { headers: { 'Content-Type': 'application/xml' } }
   );

   const json = await xml2js.parseStringPromise(result.data);
   const response = json['w3s.response']['testwmpurse'][0]['wmid'][0]['_'];

   return response;
};
