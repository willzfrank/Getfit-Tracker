require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workout");

const app = express();
const mongoose = require("mongoose");

// middleware

app.use(express.json());

// port
const PORT = process.env.PORT;
// mongodb address
const dBaddress = process.env.MONGO_DB_ADDRESS;

// routes

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(dBaddress)
  .then(() => {
    app.listen(4000, () => {
      console.log(`Connected to database and listening on port  ${PORT}`);
    });
  })
  .catch((err) => {
    console.log({ err: err.message });
  });
