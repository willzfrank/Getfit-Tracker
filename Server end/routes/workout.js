const express = require("express");
const Router = express.Router();
const workOutModel = require("../models/workoutModel");

Router.get("/", (req, res) => {
  res.json({ msg: "GET request" });
});

Router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

Router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = workOutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

Router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE request" });
});

Router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE request" });
});

module.exports = Router;
