const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
// const cookie = require("cookie-parser");

const Register = async (req, res) => {
  let { body } = req;
  let user = await User.create({ ...body });
  res.send(user)
};
const Login = async (req, res) => {};
const Logout = async (req, res) => {};

module.exports = { Register, Login, Logout };
