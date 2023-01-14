const Formation = require("../models/Formation");
const { validationResult } = require("express-validator");

const add = async (req, res, next) => {
  const errors = validationResult(req);
  try {
    if (errors.isEmpty()) {
      const formationExist = await Formation.aggregate([
        { $match: { name: req.body.name } },
      ]);
      if (formationExist.length <= 0) {
        const formation = await new Formation({
          name: req.body.name,
          description: req.body.description,
          image: req.body.image,
          dubet_date: new Date().toDateString(),
          final_date: new Date().toDateString(),
          organizme:req.body.organizme
        });
        if (formation) {
          await formation.save();
          res.send("Formation Created Success");
        }
      } else {
        throw new Error("This Formation Aleardy Exist");
      }
    } else {
      throw new Error(errors.errors[0].msg);
    }
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const allFormation = await Organizme.aggregate([
      { $project: { _id: 1, name: 1 } },
    ]);
    if (!allFormation) throw new Error("Formation not found");
    if (allFormation) res.json({ success: true, formation: allFormation });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const id = req.params.id;
  try {
    const oneFormation = await Formation.findById({ _id: id });
    if (!oneFormation) throw new Error("This Formation Not Found");
    if (oneFormation) res.json({ success: true, formation: oneFormation });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {};

const update = async (req, res, next) => {};

module.exports = { add, getAll, getOne, remove, update };
