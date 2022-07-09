const workOutModel = require("../models/workoutModel");
const mongoose = require("mongoose");

const getWorkOuts = async (req, res) => {
  const workouts = await workOutModel.find({}).sort({ createdAt: -1 });
  // desending order
  res.status(200), json(workouts);
};

const getWorkOut = async (req, res) => {
  const { id } = req.params;

  // check if id is valid
  if (!mongoose.types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const data = await workOutModel.findById(id);
  if (!data) {
    return res.status(404).json({ error: "No workout available" });
  }
  res.status(200).json(data);
};

const createWorkOut = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await workOutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWorkOut = async (req, res) => {
  const { id } = req.params;

  // check if id is valid
  if (!mongoose.types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const data = await workOutModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!data) {
    return res.status(400).json({ error: "No workout available" });
  }

  res.status(200).json(data);
};

const deleteWorkOut = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!mongoose.types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const data = await workOutModel.findOneAndDelete({ _id: id });

  if (!data) {
    return res.status(400).json({ error: "No workout available" });
  }

  res.status(200).json(data);
};

module.exports = {
  getWorkOut,
  getWorkOuts,
  createWorkOut,
  deleteWorkOut,
  updateWorkOut,
};
