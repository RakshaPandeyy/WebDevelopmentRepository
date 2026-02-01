import express from "express";
import authRoutes from "./src/routes/authRoutes.js";

const app = express(); //creates server 

// allows reading of JSON data
app.use(express.json());

// route with / as homepage, req and res 
app.get("/", (req, res) => {
  res.send("JanSamadhan Backend is Running ");
});

// auth routes 

app.use("/api/auth", authRoutes);


app.listen(5000, () => { //starting server on 5000 port 
  console.log("Server running on port 5000");
});
