const express = require("express");
const userRoutes = require("./userRegister.route.js");

const indexRouter = express.Router();

// User Registration Router
indexRouter.use("/users", userRoutes);

module.exports = indexRouter;
