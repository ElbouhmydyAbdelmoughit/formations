const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
// const cookie = require("cookie-parser");
const { validationResult } = require("express-validator");


const Register = async (req, res) => {
  let { body } = req;
  try {
    const userExist = await User.findOne({ email: body.email });
    if (userExist) {
      throw res.send("This Email already exist");
    } else {
      const errors = validationResult(req)
      if( errors.isEmpty()){
        let user = await User.create({ ...body });
        res.send(user);
      }else {
        throw res.send(errors.errors[0].msg)
      }
    }
  } catch (error) {
    res.send(error.message)
  }
};
const Login = async (req, res) => {};
const Logout = async (req, res) => {};

module.exports = { Register, Login, Logout };
