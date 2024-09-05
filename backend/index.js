const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const Port = process.env.PORT || 3000;
const trackingRoute = require("./Routes/Tracking");
const adminroute = require("./Routes/AdminRoute");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/tracking", trackingRoute);
app.use("/admin", adminroute);

app.listen(Port);
