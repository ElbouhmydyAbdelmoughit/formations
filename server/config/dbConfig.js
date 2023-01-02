const mongoose = require("mongoose");
const { error, success } = require("consola");

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    success({ message: "database is connected", badge: true });
  })
  .catch((err) => {
    error({ message: err.message, badge: true });
  });
