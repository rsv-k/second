const Merchant = require('../models/merchant');

//@desc     Get all merchants
//@route    GET api/v1/merchants
//@access   Private
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

//@desc     Create merchant
//@route    POST api/v1/merchants/:id
//@access   Private
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

//@desc     Delete merchant
//@route    DELETE api/v1/merchants/:id
//@access   Private
exports.deleteMerchant = async (req, res, next) => {
   try {
      const id = req.params.id;

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

//@desc     Update merchant
//@route    PUT api/v1/merchants/:id
//@access   Private
exports.editMerchant = async (req, res, next) => {
   try {
      const id = req.params.id;

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
