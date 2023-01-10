const express = require("express");
const app = express();
require("dotenv").config();
const { success } = require("consola");
require("./config/dbConfig");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const organizmeRouter = require("./routers/organizmeRouter");
const formationRouter = require("./routers/formationRouter");
const ErrorHandler = require("./middlewares/errorHandling/errorHandling");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
  })
);

app.use(express.json());
app.use("/auth", authRouter);
app.use("/organizme", organizmeRouter);
// app.use("/formation", formationRouter);

app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  success({ message: `port runing ${process.env.PORT}`, badge: true });
});
