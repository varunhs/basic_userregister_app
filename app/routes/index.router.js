const express = require("express");
const userRoutes = require("./userRegister.route.js");

const indexRouter = express.Router();

indexRouter.use("/users", userRoutes);

module.exports = indexRouter;
