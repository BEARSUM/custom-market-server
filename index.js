const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
