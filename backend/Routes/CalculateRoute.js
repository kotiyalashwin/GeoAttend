const { EmployeeLoc, ofcLoc, Employee } = require("../db");
const calculateDistance = require("../utils/calculatedistance");
const express = require("express");
const route = express.Router();

route.get("/status/:name", async (req, res) => {
  const RADIUS = 20000;
  const { name } = req.params;
  try {
    const employeeExist = await EmployeeLoc.findOne({ name: name });

    if (!employeeExist) {
      return;
    }

    const office = await ofcLoc.find();
    if (!office) {
      return res.status(404).json({ message: "Office location not found" });
    }

    const { latitude: EMPLOYEE_LATITUTDE, longitude: EMPLOYEE_LONGITUDE } =
      employeeExist;
    // console.log(EMPLOYEE_LATITUTDE, EMPLOYEE_LONGITUDE);
    const { latitude: OFFICE_LATITUDE, longitude: OFFICE_LONGITUDE } =
      office[0];
    console.log(OFFICE_LATITUDE, OFFICE_LONGITUDE);

    const distance = await calculateDistance(
      EMPLOYEE_LATITUTDE,
      EMPLOYEE_LONGITUDE,
      OFFICE_LATITUDE,
      OFFICE_LONGITUDE
    );
    console.log(distance);
    const employee = await Employee.findOne({ name: name });

    if (distance <= RADIUS) {
      await Employee.findOneAndUpdate(
        { name: name },
        {
          checkInTime: new Date().toLocaleTimeString(),
          status: "check-in",
        }
      );
    } else {
      await Employee.findOneAndUpdate(
        { name: name },
        {
          checkOutTime: new Date().toLocaleTimeString(),
          status: "check-out",
        }
      );
    }

    const employeeUp = await Employee.findOne({ name: name });
    const status = employeeUp.status;
    const checkInTime = employeeUp.checkInTime;
    const checkOutTime = employeeUp.checkOutTime;

    res.json({
      result: {
        status,
        checkInTime,
        checkOutTime,
      },
    });
  } catch (err) {
    // const now = new Date().toLocaleTimeString();
    res.status(500).json({ message: err.message });
  }
});

module.exports = route;
