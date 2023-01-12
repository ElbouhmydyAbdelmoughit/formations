require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const generator = require("generate-password");
const Mailer = require('../utils/mailer/Mailer')

const Login = async (req, res, next) => {
  try {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const user = await User.aggregate([
        { $match: { email: req.body.email } },
      ]);
      if (user.length <= 0) throw new Error("User Not Found");
      if (user) {
        if (user[0].password === req.body.password) {
          const token = await jwt.sign(
            {
              name: user[0].name,
              email: user[0].email,
              role: user[0].role,
            },
            process.env.TOKEN_SECRET,
            { expiresIn: "1800s" }
          );
          res.json({ message: "Login Success", token: token });
        } else {
          throw new Error("Password incorrect");
        }
      }
    } else {
      throw new Error(errors.errors[0].msg);
    }
  } catch (err) {
    next(err);
  }
};

const addUser = async (req, res, next) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) throw new Error("This User Already Exist");
    if (!userExist) {
      const password = generator.generate({
        length: 12,
        numbers: true,
      });
      console.log(password)
      const createUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: password,
      });
      if(createUser){
        res.send(createUser)
      }
      // if(createUser){
      //   // Mailer(password,req.body.email)
      //   console.log(createUser)
      //   const test = await createUser.save()
      //   res.send(test)
      // }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { Login, addUser };
