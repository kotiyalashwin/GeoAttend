const express = require("express");
const { ofcLoc } = require("../db");
const route = express.Router();

route.post("/update", async (req, res) => {
  const { latitude, longitude } = req.body;
  try {
    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ message: "Latitude and longitude are required" });
    }

    const locationExist = await ofcLoc.findOne();
    if (locationExist) {
      locationExist.latitude = latitude;
      locationExist.longitude = longitude;
      await officeLocation.updateOne({ latitude, longitude });
    } else {
      const newLocation = await ofcLoc.create({ latitude, longitude });
    }
    res.json({ message: "Office location updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = route;
