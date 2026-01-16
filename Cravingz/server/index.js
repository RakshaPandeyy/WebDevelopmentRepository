import dotenv from "dotenv";
import AuthRouter from "./src/routers/authRouter.js";
import morgan from "morgan";
import PublicRouter from "./src/routers/publicRouter.js";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

app.get("/", (req, res) => {
  res.json({ message: "server connected" });
});
app.use((error, req, res, next) => {
  const ErrorMessage = error.message || "Internal server error";
  const statusCode = error.statusCode || 500;
  console.log(ErrorMessage, statusCode);
  res.status(statusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log("server started at", port);
  connectDB();
});
