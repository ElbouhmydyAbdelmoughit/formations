const organizmeRouter = require("express").Router();
const { check } = require("express-validator");
const {
  add,
  getOne,
  getAll,
  remove,
  update,
} = require("../controllers/organizmeController");

organizmeRouter.post(
  "/add",
  [check("name", "Name is required").not().isEmpty()],
  add
);
organizmeRouter.get("/:id", getOne);
organizmeRouter.get("/", getAll);
organizmeRouter.delete("/remove/:id", remove);
organizmeRouter.post(
  "/update/:id",
  [check("name", "Name is required").not().isEmpty()],
  update
);

module.exports = organizmeRouter;
