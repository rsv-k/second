const mongoose = require('mongoose');

const connectDB = async () => {
   const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
   });

   console.log(`database connected in ${conn.connection.host}`.cyan.underline);
};

module.exports = connectDB;
