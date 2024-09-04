const express = require("express");
const route = express.Router();
const employeeRoute = require("./EmployeeRoute");
const ofcRoute = require("./OfficeRoute");

route.use("/employee", employeeRoute);
route.use("/office", ofcRoute);

module.exports = route;
