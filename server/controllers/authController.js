const User = require("../models/User");
require("dotenv").config();
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require('../middlewares/errorHandling/ErrorHandling')

const Login = async (req, res, next) => {
  try {
    let emailExist = User.findOne({ email: req.body.email });
    if (!emailExist) {
      throw res.send("User not found");
    } else {
      res.send( emailExist );
    }
  } catch (error) {
    next(error);
  }
};

const Logout = async (req, res) => {};

module.exports = { Login, Logout };
