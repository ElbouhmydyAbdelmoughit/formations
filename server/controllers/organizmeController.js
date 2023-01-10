const Organizme = require("../models/Organisme");
const { validationResult } = require("express-validator");

const add = async (req, res, next) => {
  const errors = validationResult(req);
  try {
    if (errors.isEmpty()) {
      const organismeExist = await Organizme.aggregate([
        { $match: { name: req.body.name } },
      ]);
      if (organismeExist.length <= 0) {
        console.log("test");
        const organizme = await new Organizme({
          name: req.body.name,
        });
        if (organizme) {
          const organizmeSaved = await organizme.save();
          res.send(organizmeSaved);
        }
      } else {
        throw new Error("This Organisme Aleardy Exist");
      }
    } else {
      throw new Error(errors.errors[0].msg);
    }
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {};
const remove = async (req, res, next) => {};
const update = async (req, res, next) => {};

module.exports = { add, getAll, remove, update };
