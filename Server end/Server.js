require("dotenv").config();

const express = require("express");

const app = express();
const mongoose = require("mongoose");

// middleware


app.use(express.json())

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json("HELLO WORLD");
});

// mongoose.connect();

app.listen(4000, () => {
  console.log(`listening on ${PORT}`);
});
