import express from "express";
import Fabric from "../models/Fabric.js";

const fabricRouter = express.Router();

// 전체 원단 조회
fabricRouter.get("/api/fabrics", async (req, res) => {
  try {
    const fabrics = await Fabric.find();
    res.status(200).json({ fabrics });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default fabricRouter;
