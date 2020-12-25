const Merchant = require('../models/merchant');

//@desc     Get all merchants
//@route    GET api/v1/merchants
//@access   Private
exports.getMerchants = async (req, res, next) => {
   try {
      const merchants = await Merchant.find();

      res.status(200).json({
         status: true,
         data: merchants,
      });
   } catch (err) {
      next(err);
   }
};

//@desc     Create merchant
//@route    POST api/v1/merchants/:id
//@access   Private
exports.createMerchant = async (req, res, next) => {
   try {
      let merchant = new Merchant(req.body);
      merchant = await merchant.save();

      res.status(201).json({
         status: true,
         data: merchant,
      });
   } catch (err) {
      next(err);
   }
};

//@desc     Delete merchant
//@route    DELETE api/v1/merchants/:id
//@access   Private
exports.deleteMerchant = async (req, res, next) => {
   try {
      const id = req.params.id;

      const merchant = await Merchant.findByIdAndDelete(id);
      if (!merchant) {
         const error = new Error('Merchant not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({
         status: true,
         data: merchant,
      });
   } catch (err) {
      next(err);
   }
};

//@desc     Update merchant
//@route    PUT api/v1/merchants/:id
//@access   Private
exports.editMerchant = async (req, res, next) => {
   try {
      const id = req.params.id;

      let merchant = await Merchant.findByIdAndUpdate(id, req.body, {
         new: true,
      });
      if (!merchant) {
         const error = new Error('Merchant not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(202).json({
         status: true,
         data: merchant,
      });
   } catch (err) {
      next(err);
   }
};
