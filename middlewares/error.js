const fileHelper = require('../utils/file');

module.exports = (error, req, res, next) => {
   const statusCode = error.statusCode || 500;
   const message = error.message;

   if (req.file) {
      fileHelper.deleteFile(req.file.path);
   }

   res.status(statusCode).json({ message });
};
