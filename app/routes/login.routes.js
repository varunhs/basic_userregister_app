const express = require("express");

const loginRouter = express.Router();

loginRouter.route("/login").post();

module.exports = loginRouter;
