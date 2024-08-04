import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fabricRouter from "./src/routes/fabric.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI;

//application/json
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(fabricRouter);

const startServer = async () => {
  try {
    await mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB 접속 성공");

    app.listen(port, () => {
      console.log(`${port} 서버가 작동중`);
    });
  } catch (error) {
    console.error("DB 접속 실패", error);
  }
};

startServer();
