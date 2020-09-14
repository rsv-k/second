const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/test", (req, res) => {
   res.status(200).json({
      data: [
         {
            name: "hello",
         },
      ],
   });
});

app.listen(PORT, () => {
   console.log("server is running");
});
