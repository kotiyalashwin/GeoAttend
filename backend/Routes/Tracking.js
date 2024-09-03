const express = require("express");
const route = express.Router();
const employeeRoute = require("./EmployeeRoute");
const ofcRoute = require("./OfficeRoute");

route.get("/office", (req, res) => {
  res.json({
    message: "track office",
  });
});

route.use("/employee", employeeRoute);
route.use("/office", ofcRoute);

module.exports = route;
