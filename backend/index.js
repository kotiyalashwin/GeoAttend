const express = require("express");
const app = express();
const cors = require("cors");
const trackingRoute = require("./Routes/Tracking");
const adminroute = require("./Routes/AdminRoute");
app.use(cors());
app.use(express.json());
app.use("/tracking", trackingRoute);
app.use("/admin", adminroute);

app.listen(3000);
