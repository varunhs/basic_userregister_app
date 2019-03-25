const UserRegister = require("../models/register.model");
const { ObjectID } = require("mongodb");

exports.userRegister = (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.phoneNo ||
    !req.body.email ||
    !req.body.address
  ) {
    return res.send({
      message: "All fields are requires"
    });
  } else {
    const usersDetails = new UserRegister({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNo: req.body.phoneNo,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address
    });
    usersDetails
      .save()
      .then(() => {
        return usersDetails.generateAuthToken();
        // res.send(data);
      })
      .then(token => {
        res.header("x-auth", token).send(usersDetails);
      })
      .catch(err => {
        res.status(400).send({
          message:
            err.message || "Some error occured while creating the Register"
        });
      });
  }
};

exports.getRegisteredUsers = (req, res) => {
  UserRegister.find()
    .then(userList => {
      if (userList) {
        res.send(userList);
      } else {
        res.send(userList.status);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured"
      });
    });
};

exports.removeRegisteredUser = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  UserRegister.findOneAndRemove(id)
    .then(data => {
      if (!data) {
        return res.status(404).send();
      }
      res.send(data);
    })
    .catch(e => {
      res.status(400).send();
    });
};

exports.updateRegisteredUser = (req, res) => {
  const usersDetails = new UserRegister({
    _id: req.params.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNo: req.body.phoneNo,
    email: req.body.email,
    address: req.body.address
  });
  usersDetails
    .updateOne(usersDetails)
    .then(data => {
      console.log("DATA", data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Register"
      });
    });
};
