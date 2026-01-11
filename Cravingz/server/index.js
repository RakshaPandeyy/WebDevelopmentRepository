import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
const app = express();

app.use(cors( {origin: "http://localhost:5173"}))
app.use(express.json());
// app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.json({ message: "server connected" });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log("server started at", port);
  connectDB();
});
