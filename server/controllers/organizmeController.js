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
        const organizme = await new Organizme({
          name: req.body.name,
        });
        if (organizme) {
          await organizme.save();
          res.send("Organizme Created Success");
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

const getAll = async (req, res, next) => {
  try {
    const allOrganizme = await Organizme.aggregate([
      { $project: { _id: 1, name: 1 } },
    ]);
    if (!allOrganizme) throw new Error("Organizme not found");
    if (allOrganizme) res.json({ success: true, organizme: allOrganizme });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const id = req.params.id;
  try {
    const organizmeExist = await Organizme.deleteOne({ _id: id });
    if (!organizmeExist) throw new Error("This Organizme not Found");
    if (organizmeExist) {
      res.send("Organizme Deleted Success");
    }
  } catch (error) {
    next(error);
  }
};
const update = async (req, res, next) => {};

module.exports = { add, getAll, remove, update };
