const Exchange = require('../models/exchange');

//@desc     Get all exchanges
//@route    GET api/v1/exchanges
//@access   Public
exports.getExchanges = async (req, res, next) => {
   try {
      const exchanges = await Exchange.find({})
         .populate({
            path: 'givenCurrency',
            populate: {
               path: 'validator',
            },
         })
         .populate({
            path: 'takenCurrency',
            populate: {
               path: 'validator',
            },
         })
         .populate('merchant');

      res.status(200).json({
         status: true,
         data: exchanges,
      });
   } catch (err) {
      next(err);
   }
};

//@desc     Get exchange
//@route    GET api/v1/exchanges/:id
//@access   Public
exports.getExchange = async (req, res, next) => {
   try {
      const id = req.params.id;

      const exchange = await Exchange.findById(id)
         .populate('takenCurrency')
         .populate('givenCurrency')
         .populate('merchant');
      if (!exchange) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({
         status: true,
         data: exchange,
      });
   } catch (err) {
      next(err);
   }
};

//@desc     Create new exchange
//@route    POST api/v1/exchanges
//@access   Private
exports.createExchange = async (req, res, next) => {
   try {
      const body = req.body;

      let exchange = new Exchange(body);
      exchange = await exchange.save();

      exchange = await Exchange.findById(exchange._id)
         .populate('givenCurrency')
         .populate('takenCurrency');

      res.status(201).json({
         status: true,
         data: exchange,
      });
   } catch (err) {
      next(err);
   }
};

//@desc     Delete exchange
//@route    DELETE api/v1/exchanges/:id
//@access   Private
exports.deleteExchange = async (req, res, next) => {
   try {
      const id = req.params.id;

      const exchange = await Exchange.findByIdAndDelete(id);

      if (!exchange) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({ status: true, data: exchange });
   } catch (err) {
      next(err);
   }
};

//@desc     Update exchange
//@route    PUT api/v1/exchanges/:id
//@access   Private
exports.editExchange = async (req, res, next) => {
   try {
      const id = req.params.id;
      const body = req.body;

      let exchange = await Exchange.findByIdAndUpdate(id, body, { new: true })
         .populate('takenCurrency')
         .populate('givenCurrency');
      if (!exchange) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({ status: true, data: exchange });
   } catch (err) {
      next(err);
   }
};
