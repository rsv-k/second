module.exports = (error, req, res, next) => {
   const statusCode = error.statusCode || 500;
   const message = error.message;

   res.statusCode(statusCode).json({ message });
};
