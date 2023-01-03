const authRouter = require("express").Router();
const { Login, Register, Logout } = require("../controllers/authController");
// const { check, validationResult } = require("express-validator");

authRouter.post("/login", Login);
authRouter.post("/register", Register);
authRouter.post("/logout", Logout);

module.exports = authRouter