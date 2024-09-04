const express = require("express");
const { EmployeeLoc } = require("../db");
const route = express.Router();

route.post("/update", async (req, res) => {
  const { username, userlatitude, userlongitude } = req.body;
  const locExist = await EmployeeLoc.findOne({ name: username });

  if (!locExist) {
    await EmployeeLoc.create({
      name: username,
      latitude: userlatitude,
      longitude: userlongitude,
    });
  } else {
    await EmployeeLoc.findOneAndUpdate(
      { name: username },
      {
        latitude: userlatitude,
        longitude: userlongitude,
      }
    );
  }
  res.json({
    message: "reached update location",
  });
});

module.exports = route;
