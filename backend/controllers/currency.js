const Currency = require("../models/currency");

exports.createCurrency = async (req, res, next) => {
   try {
      const body = JSON.parse(req.body.data);
      if (Object.keys(body).length === 0) {
         const error = new Error("Incomplete data");
         error.statusCode = 422;
         return next(error);
      }

      const currency = new Currency({
         ...body,
         icon: req.file.path,
      });

      await currency.save();

      res.status(201).json({ msg: "currency created successfully", currency });
   } catch (err) {
      const error = new Error("Internal server error");
      next(error);
   }
};

exports.getCurrencies = async (req, res, next) => {
   try {
      const currencies = await Currency.find();
      if (currencies.length === 0) {
         const error = new Error("Not found");
         error.statusCode = 404;
         return next(error);
      }

      res.status(200).json({
         msg: "currencies fetched successfully",
         currencies,
      });
   } catch (err) {
      const error = new Error("Internal server error");
      next(error);
   }
};
