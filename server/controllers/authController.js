const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const cookie = require("cookie-parser");

const Register = async (req, res) => {
  try {
    let userSave = await User.create({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      hash_password:req.body.hash_password,
      organisme_id:req.body.organisme_id,
      rola_id:req.body.rola_id,
      formation_id:req.body.formation_id,
    })
    (userSave) ? res.json({data:userSave}) : res.json({message:"User not created"})
    
  } catch (error) {
    console.log(error)
  }
};
const Login = async (req, res) => {

};
const Logout = async (req, res) => {

};

module.exports = { Register, Login, Logout };
