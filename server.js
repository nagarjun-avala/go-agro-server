require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Routes
app.use("/api", require("./routes/authRouter"));

const URI = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/agriculture_db";

mongoose.connect(URI).then(() => {
  console.log("Connected To MongoDB");
}).catch((err) => {
  throw new Error(err)
});

const port = process.env.PORT ||3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.json({message:"Welcome to the server"})
});