const formationRouter = require("express").Router();
const { check } = require("express-validator");
const {
  add,
  getAll,
  getOne,
  remove,
  update,
} = require("../controllers/formationController");
const upload = require("../middlewares/uploadImage/upload");

formationRouter.post(
  "/add",
  [
    check("name").trim().notEmpty(),
    check("description").trim().notEmpty(),
    check("image").trim().notEmpty(),
    // check("dubet_date").trim().notEmpty().isDate(),
    // check("final_date").trim().notEmpty().isDate(),
    check("organizme").trim().notEmpty(),
  ],
  upload.single("image"),
  add
);
formationRouter.get("/", getAll);
formationRouter.get("/:id", getOne);
formationRouter.delete("/remove/:id", remove);
formationRouter.post("/update/:id", update);

module.exports = formationRouter;
