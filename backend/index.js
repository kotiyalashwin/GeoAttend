const express = require("express");
const app = express();
const cors = require("cors");
const trackingRoute = require("./Routes/Tracking");
app.use(cors());
app.use(express.json());
app.use("/tracking", trackingRoute);

app.listen(3000);
