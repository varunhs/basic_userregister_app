const express = require("express");
const userRoutes = require("./userRegister.route");
const loginRoutes = require("./login.routes");

const indexRouter = express.Router();

// User Registration Router
indexRouter.use("/users", userRoutes);

// Login Router
indexRouter.use("/userLogin",loginRoutes);

module.exports = indexRouter;
