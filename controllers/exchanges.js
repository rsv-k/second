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
      if (exchanges.length === 0) {
         const error = new Error('Exchanges not found');
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({
         msg: 'exchanges fetched successfully',
         exchanges,
      });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
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
         msg: 'Exchange successfully fetched',
         exchange,
      });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

//@desc     Create new exchange
//@route    POST api/v1/exchanges
//@access   Private
exports.createExchange = async (req, res, next) => {
   try {
      const body = req.body;

      if (Object.keys(body).length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      let exchange = new Exchange(body);
      exchange = await exchange.save();

      exchange = await Exchange.findById(exchange._id)
         .populate('givenCurrency')
         .populate('takenCurrency');

      res.status(201).json({
         msg: 'exchange created successfully',
         exchange,
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

      const exchange = await Exchange.findById(id);

      if (!exchange) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      await exchange.remove();

      res.status(200).json({ msg: 'Exchange deleted successfully', exchange });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

//@desc     Update exchange
//@route    PUT api/v1/exchanges/:id
//@access   Private
exports.editExchange = async (req, res, next) => {
   try {
      const id = req.params.id;
      const body = req.body;

      if (Object.keys(body).length === 0) {
         const error = new Error('Incomplete data');
         error.statusCode = 422;
         return next(error);
      }

      let exchange = await Exchange.findById(id);
      if (!exchange) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      exchange = await Exchange.findByIdAndUpdate(id, body, { new: true })
         .populate('takenCurrency')
         .populate('givenCurrency');

      res.status(200).json({ msg: 'Exchange updated successfully', exchange });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};

//@desc     Patch exchange
//@route    PATCH api/v1/exchanges/:id
//@access   Private
exports.patchExchange = async (req, res, next) => {
   try {
      const id = req.params.id;
      const body = req.body;

      let exchange = await Exchange.findById(id);
      if (!exchange) {
         const error = new Error('Exchange not found');
         error.statusCode = 404;
         return next(error);
      }

      exchange = await Exchange.findByIdAndUpdate(id, body, { new: true })
         .populate('takenCurrency')
         .populate('givenCurrency');

      res.status(200).json({ msg: 'Exchange updated successfully', exchange });
   } catch (err) {
      next(err);
   }
};
