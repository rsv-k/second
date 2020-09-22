const Currency = require("../models/currency");

exports.createCurrency = async (req, res, next) => {
   try {
      if (!req.body) {
         const error = new Error("Incomplete data");
         error.statusCode = 422;
         return next(500);
      }

      console.log(req.body);
      // const currency = new Currency({
      //    ...req.body
      // })

      res.status(201).json({ msg: "currency created successfully" });
   } catch (err) {
      const error = new Error("Internal server error");

      next(error);
   }
};
