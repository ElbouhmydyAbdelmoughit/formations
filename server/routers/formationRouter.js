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
    check("name", "Please Enter Name").trim().notEmpty(),
    check("description", "Please Enter Description").trim().notEmpty(),
    check("image", "Please Add Image").trim().notEmpty(),
    check("dubet_date", "Please Enter Dubet Date").trim().notEmpty().isDate(),
    check("final_date", "Please Enter Final Date").trim().notEmpty().isDate(),
  ],
  upload.single("image"),
  add
);
formationRouter.get("/", getAll);
formationRouter.get("/:id", getOne);
formationRouter.delete("/remove/:id", remove);
formationRouter.post(
  "/update/:id",
  [
    check("name", "Please Enter Name").trim().notEmpty(),
    check("description", "Please Enter Description").trim().notEmpty(),
    check("image", "Please Add Image").trim().notEmpty(),
    check("dubet_date", "Please Enter Dubet Date").trim().notEmpty().isDate(),
    check("final_date", "Please Enter Final Date").trim().notEmpty().isDate(),
  ],
  update
);

module.exports = formationRouter;
