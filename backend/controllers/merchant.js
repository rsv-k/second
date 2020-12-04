const Merchant = require('../models/merchant');
const mongooseHelper = require('../utils/mongoose');

exports.createMerchant = async (req, res, next) => {
   try {
      let merchant = new Merchant(req.body);
      merchant = await merchant.save();

      res.status(201).json({
         msg: 'merchant created successfully',
         merchant,
      });
   } catch (err) {
      next(err);
   }
};

exports.getMerchants = async (req, res, next) => {
   try {
      const merchants = await Merchant.find({});
      if (merchants.length === 0) {
         const error = new Error('Merchants not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({
         msg: 'merchants fetched successfully',
         merchants,
      });
   } catch (err) {
      next(err);
   }
};

exports.deleteMerchant = async (req, res, next) => {
   try {
      const id = req.params.id;
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Merchant not found');
         error.statusCode = 404;
         return next(error);
      }

      const merchant = await Merchant.findById(id);
      if (!merchant) {
         const error = new Error('Merchant not found');
         error.statusCode = 404;
         return next(error);
      }

      await merchant.remove();

      res.status(200).json({
         msg: 'merchant successfully deleted',
         merchant,
      });
   } catch (err) {
      next(err);
   }
};

exports.editMerchant = async (req, res, next) => {
   try {
      const id = req.params.id;
      if (!mongooseHelper.isValidId(id)) {
         const error = new Error('Merchant not found');
         error.statusCode = 404;
         return next(error);
      }

      let merchant = await Merchant.findById(id);
      if (!merchant) {
         const error = new Error('Merchant not found');
         error.statusCode = 404;
         return next(error);
      }

      merchant = await Merchant.findByIdAndUpdate(
         id,
         {
            name: req.body.name,
            regex: req.body.regex,
         },
         { new: true }
      );

      res.status(202).json({
         msg: 'merchant successfully updated',
         merchant,
      });
   } catch (err) {
      next(err);
   }
};
