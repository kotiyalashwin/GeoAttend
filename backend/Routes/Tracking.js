const express = require("express");
const route = express.Router();
const employeeRoute = require("./EmployeeRoute");

route.get("/office", (req, res) => {
  res.json({
    message: "track office",
  });
});

route.use("/employee", employeeRoute);

module.exports = route;
