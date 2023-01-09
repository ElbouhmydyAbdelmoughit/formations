const express = require("express");
const app = express();
require("dotenv").config();
const { success } = require("consola");
require("./config/dbConfig");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const ErrorHandler  = require("./middlewares/errorHandling/errorHandling");
const { post } = require("./routers/authRouter");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
  })
);


app.use(express.json());
app.use("/auth", authRouter);

app.use(ErrorHandler)

app.listen(process.env.PORT, () => {
  success({ message: `port runing ${process.env.PORT}`, badge: true });
});
