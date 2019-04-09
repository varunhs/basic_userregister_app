const express = require("express");
const userRoutes = require("./userRegister.route");
const loginRoutes = require("./login.routes");
const quotesRoutes = require("./quotes.router");

const indexRouter = express.Router();

// User Registration Router
indexRouter.use("/users", userRoutes);

// Login Router
indexRouter.use("/userLogin", loginRoutes);

// Quotes Router
indexRouter.use("/quotes", quotesRoutes);

module.exports = indexRouter;
