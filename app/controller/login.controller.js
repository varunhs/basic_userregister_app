const UserLogin = require("../models/register.model");
const _ = require("lodash");

exports.userLogin = (req, res) => {
  var body = _.pick(req.body, ["email", "password"]);

  UserLogin.findByCredentials(body.email, body.password)
    .then(user => {
      //   return user.generateAuthToken().then(token => {
      //     res.header("x-auth", token).send(user);
      //   });
      res.send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};
