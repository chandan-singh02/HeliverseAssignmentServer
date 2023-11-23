const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
const app = express();
app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/teams", teamRoutes);

module.exports = app;
