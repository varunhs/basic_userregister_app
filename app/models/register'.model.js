const mongoose = require("mongoose");

const UserRegisterSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNo: Number,
  email: String,
  address: String
});

module.exports = mongoose.model("UserRegister", UserRegisterSchema);
