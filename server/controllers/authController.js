const User = require("../models/User");
require("dotenv").config();
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Error } = require("mongoose");

const Login = async (req, res, next) => {
  try {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const user = await User.aggregate([
        { $match: { email: req.body.email } },
      ]);
      if (user.length <= 0) throw new Error("Use Not Found");
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
          res.json({message:"Login Success",token:token});
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

// const addUser = (req,res,next) =>{
//   try {
//     const
//   } catch (error) {
//     next(error)
//   }
// }

module.exports = Login;
