const express = require("express");
const userRoutes = require("./userRegister.route");
const loginRoutes = require("./login.routes");
const quotesRoutes = require("./quotes.router");
const testimonialRoutes = require("./testimonial.router");
const audioRouter = require("./audio.router");

const indexRouter = express.Router();

// User Registration Router
indexRouter.use("/users", userRoutes);
// Login Router
indexRouter.use("/userLogin", loginRoutes);
// Quotes Router
indexRouter.use("/quotes", quotesRoutes);
// Testimonial Router
indexRouter.use("/testimonials", testimonialRoutes);
// Audio Router
indexRouter.use("/audio", audioRouter);

module.exports = indexRouter;
