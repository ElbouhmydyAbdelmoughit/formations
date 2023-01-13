const authRouter = require("express").Router();
const {Login, add } = require("../controllers/authController");
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
authRouter.post(
  "/add",
  [
    check("name", "Nmail is Requered").trim().notEmpty(),
    check("email", "Email is Requered").trim().notEmpty().isEmail(),
  ],
  add
);

module.exports = authRouter;
