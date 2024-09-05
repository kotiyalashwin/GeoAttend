const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const url = process.env.MONGO_URL;

mongoose.connect(`${url}`);

const officeLocSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
});

const employeeSchema = new mongoose.Schema({
  name: String,
  checkInTime: { type: String, default: [] },
  checkOutTime: { type: String, default: [] },
  status: { type: String, default: "check-out" },
  workingHours: Number,
});

const employeeLocSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
});

const Employee = mongoose.model("Employee", employeeSchema);
const EmployeeLoc = mongoose.model("EmployeeLoc", employeeLocSchema);
const ofcLoc = mongoose.model("OfcLoc", officeLocSchema);

module.exports = {
  Employee,
  EmployeeLoc,
  ofcLoc,
};
