const mongoose = require('mongoose');

const connectDB = async () => {
   const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });

   console.log(`database connected in ${conn.connection.host}`.cyan.underline);
};

module.exports = connectDB;
