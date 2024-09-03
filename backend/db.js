const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ashwinkotiyal07:hxXYvn6CzGPJYwGK@cluster0.p1a59.mongodb.net/GeoAttend"
);

const officeLocSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
});

const employeeSchema = new mongoose.Schema({
  name: String,
  checkInTime: { type: String, default: null },
  checkOutTime: { type: String, default: null },
  status: { type: String, enum: ["check-in", "check-out"] },
  workingHours: Number,
});

const employeeLocSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitutde: Number,
});

const Employee = mongoose.model("Employee", employeeSchema);
const EmployeeLoc = mongoose.model("EmployeeLoc", employeeLocSchema);
const ofcLoc = mongoose.model("OfcLoc", officeLocSchema);

module.exports = {
  Employee,
  EmployeeLoc,
  ofcLoc,
};
