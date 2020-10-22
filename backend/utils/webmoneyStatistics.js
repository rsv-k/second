const WebmoneyStatistics = require('../models/webmoneyStatistics');

exports.increaseOrdersAmount = async (req, res) => {
   let webmoneyStatistics = WebmoneyStatistics.findOne({});
   if (!webmoneyStatistics) {
      webmoneyStatistics = new WebmoneyStatistics({
         ordersAmount: 1,
         requestsAmount: 1,
      });
      await webmoneyStatistics.save();
   }

   await WebmoneyStatistics.findOneAndUpdate(
      { _id: webmoneyStatistics._id },
      {
         ordersAmount: webmoneyStatistics.ordersAmount + 1,
      }
   );
};

exports.increaseRequestsAmount = async (req, res) => {
   let webmoneyStatistics = WebmoneyStatistics.findOne({});
   if (!webmoneyStatistics) {
      webmoneyStatistics = new WebmoneyStatistics({
         ordersAmount: 1,
         requestsAmount: 1,
      });
      await webmoneyStatistics.save();
   }

   await WebmoneyStatistics.findOneAndUpdate(
      { _id: webmoneyStatistics._id },
      {
         ordersAmount: webmoneyStatistics.requestsAmount + 1,
      }
   );
};

exports.getWebmoneyStatistics = async (req, res) => {
   let webmoneyStatistics = WebmoneyStatistics.findOne({});
   if (!webmoneyStatistics) {
      webmoneyStatistics = new WebmoneyStatistics({
         ordersAmount: 1,
         requestsAmount: 1,
      });
      await webmoneyStatistics.save();
   }

   return webmoneyStatistics;
};
