require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

// app.use(cors())

// Define allowed origins
const allowedOrigins = ['http://localhost:3000'];

// Use CORS middleware with specific origins
app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is in the allowedOrigins array or if it's undefined (allowing requests from non-browser clients)
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Routes
app.use("/api/auth", require("./routes/authRouter"));

const URI =
  process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/agriculture_db";

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((err) => {
    throw new Error(err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `=======================================\n Server running on port ${port}\n link: http://localhost:${port}/api`
  );
});

// Index Route
app.get("/", (req, res) => {
  res.json({
    greeting: "Welcome to the server",
    data: {
      title:"This is a Api server",
      description:"This is a Api server",
      version:"1.0.0",
      author:"Nagarjun A",
      license:"MIT",
      copyright:`Copyright (c) 2024`,
      date:"2020-09-20",

    },
    status: 200,
    success: true,
  });
});
