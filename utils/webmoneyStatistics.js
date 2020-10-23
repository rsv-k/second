const WebmoneyStatistics = require('../models/webmoneyStatistics');

exports.increaseOrdersAmount = async () => {
   let webmoneyStatistics = await WebmoneyStatistics.findOne({});
   if (!webmoneyStatistics) {
      webmoneyStatistics = await createWebmoneyStatistics();
   }

   await WebmoneyStatistics.findByIdAndUpdate(
      { _id: webmoneyStatistics._id },
      { $inc: { ordersAmount: 1 } }
   );
};

exports.increaseRequestsAmount = async () => {
   let webmoneyStatistics = await WebmoneyStatistics.findOne({});
   if (!webmoneyStatistics) {
      webmoneyStatistics = await createWebmoneyStatistics();
   }

   await WebmoneyStatistics.findByIdAndUpdate(
      { _id: webmoneyStatistics._id },
      { $inc: { requestsAmount: 1 } }
   );
};

exports.getWebmoneyStatistics = async () => {
   let webmoneyStatistics = await WebmoneyStatistics.findOne({});
   if (!webmoneyStatistics) {
      webmoneyStatistics = await createWebmoneyStatistics();
   }

   return webmoneyStatistics;
};

async function createWebmoneyStatistics() {
   const webmoneyStatistics = new WebmoneyStatistics({});
   await webmoneyStatistics.save();

   return webmoneyStatistics;
}
