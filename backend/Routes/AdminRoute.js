const express = require("express");
const { Employee } = require("../db");
const route = express.Router();

route.post("/add", async (req, res) => {
  const body = req.body;

  const user = await Employee.findOne({
    name: req.body.name,
  });

  if (user) {
    return res.json({
      message: "User already exist",
    });
  }

  res.json({
    user: body.name,
  });
  const newUser = await Employee.create({
    name: body.name,
    checkInTime: null,
    checkOutTime: null,
    status: "check-out",
    workingHours: 0,
  });
});

route.get("/users", async (req, res) => {
  const users = await Employee.find();

  res.json({
    users,
  });
});

module.exports = route;
