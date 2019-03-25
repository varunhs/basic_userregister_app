const express = require("express");
const UserLogin = require("../controller/login.controller");

const loginRouter = express.Router();

loginRouter.route("/login").post(UserLogin.userLogin);

module.exports = loginRouter;
