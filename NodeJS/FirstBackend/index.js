import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/myRouter.js"
const app = express();

app.use(express.json());
app.use("/auth",AuthRouter);

app.use((err,req,res,next)=>{ //middleware acts as a function
  const ErrorMessage= err.message ||"Internal server Error";
  const StatusCode = err.statusCode || 500;

  res.status(StatusCode).json({message:ErrorMessage})
})


app.get("/", (req, res) => {
  console.log("server is running");
  res.json({ message: "server is running successfully" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server start at port", port);
  connectDB();
});
