const authRouter = require("express").Router();
const { Login, Register, Logout } = require("../controllers/authController");
const { check, validationResult } = require("express-validator");

authRouter.post("/register", [
  check('name').trim().notEmpty().escape(),
  check('email').trim().notEmpty().escape(),
  check('phone').trim().notEmpty().escape(),
  check('hash_password').trim().notEmpty().escape().isLength({ min: 5, max: 12 }),
  check('organisme_id').trim().notEmpty().escape(),
  check('role_id').trim().notEmpty().escape(),
  check('formation_id').trim().notEmpty().escape(),
], Register);

authRouter.post("/login", Login);

authRouter.post("/logout", Logout);

module.exports = authRouter