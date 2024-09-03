const express = require("express");
const { EmployeeLoc } = require("../db");
const route = express.Router();

route.post("/update", async (req, res) => {
  const locationEmploye = req.body;
  const locExist = await EmployeeLoc.findOne();

  if (!locExist) {
    await EmployeeLoc.create(locationEmploye);
  } else {
    await EmployeeLoc.updateOne(locationEmploye);
  }
  res.json({
    message: "reached update location",
  });
});

module.exports = route;
