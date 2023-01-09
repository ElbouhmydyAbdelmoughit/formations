const authRouter = require("express").Router();
const Login = require("../controllers/authController");
const { check } = require("express-validator");

authRouter.post(
  "/login",
  [
    check("email", "Email is Requered").trim().notEmpty().isEmail(),
    check("password", "Password is required")
      .trim()
      .notEmpty()
      .escape()
      .isLength({ min: 5, max: 12 }),
  ],
  Login
);

module.exports = authRouter;
