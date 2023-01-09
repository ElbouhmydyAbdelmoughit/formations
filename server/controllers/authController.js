const User = require("../models/User");
require("dotenv").config();
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Error } = require("mongoose");

const Login = async (req, res, next) => {
  try {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (user.password === req.body.password) {
          const token = await jwt.sign(
            {
              name: user.name,
              email: user.email,
              role: user.role,
            },
            process.env.TOKEN_SECRET,
            { expiresIn: "1800s" }
          );
          res.json({success:true, token: token });
        } else {
          throw new Error("Password incorrect");
        }
      } else {
        throw new Error("Use Not Found");
      }
    } else {
      console.log(errors.errors[0].msg);
      throw new Error(errors.errors[0].msg);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = Login;
