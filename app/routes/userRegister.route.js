const express = require("express");
const UserRegister = require("../controller/user.controller.js");

const userRouter = express.Router();

userRouter.route("/userRegister").post(UserRegister.userRegister);
userRouter.route("/userRegister").get(UserRegister.getRegisteredUsers);
userRouter.route("/userRegister/:id").delete(UserRegister.removeRegisteredUser);
userRouter.route("/userRegister/:id").put(UserRegister.updateRegisteredUser);

module.exports = userRouter;
