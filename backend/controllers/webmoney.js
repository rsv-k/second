exports.isValidInfo = async (req, res, next) => {
   try {
      if (!req.body) {
         const error = new Error('Incomplete data');
         error.status = 422;
         return next(error);
      }

      return res.status(200).json({ result: true });
   } catch (err) {
      const error = new Error('Internal server error');
      next(error);
   }
};
