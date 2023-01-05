const User = require("../models/User");
require("dotenv").config();
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const Login = (req, res) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    User.aggregate([{ $match: { email: req.body.email } }])
      .then((data) => {
        if (data.length > 0) {
          const token = jwt.sign(
            {
              name: data[0].name,
              email: data[0].email,
              role: data[0].role,
            },
            process.env.TOKEN_SECRET,
            { expiresIn: "1800s" }
          );
          const VT = jwt.verify(token, process.env.TOKEN_SECRET);
          res.send(VT);
        } else {
          res.status(400).send("User not found");
          return;
        }
      })
      .catch((err) => {
        res.status(400).send(err);
        return;
      });
  } else {
    res.send("form required");
  }
};

const Logout = async (req, res) => {};

module.exports = { Login, Logout };
