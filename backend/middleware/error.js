const fileHelper = require('../utils/file');

module.exports = (error, req, res, next) => {
   console.log(error.message);
   const statusCode = error.statusCode || 500;
   const message = error.message || 'Internal server error';

   if (req.file) {
      fileHelper.deleteFile(req.file.path);
   }

   res.status(statusCode).json({ message });
};
