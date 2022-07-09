const express = require("express");
const Router = express.Router();
const {
  getWorkOut,
  getWorkOuts,
  createWorkOut,
  deleteWorkOut,
  updateWorkOut,
} = require("../controllers/workOutControllers");

Router.get("/", getWorkOuts);

Router.get("/:id", getWorkOut);

Router.post("/", createWorkOut);

Router.delete("/:id", deleteWorkOut);

Router.patch("/:id", updateWorkOut);

module.exports = Router;
