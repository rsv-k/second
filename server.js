const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const entryPoint = require("./entryPoint");

if (!process.env.production) {
   require("dotenv").config();
}

app.use(entryPoint);

app.listen(PORT, () => {
   console.log("server is running");
});

mongoose
   .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log("db connected"));
