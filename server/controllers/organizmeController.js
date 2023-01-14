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

const getOne = async (req, res, next) => {
  const id = req.params.id;
  try {
    const oneOrganizme = await Organizme.findById({ _id: id });
    if (oneOrganizme.length <= 0) throw new Error("This Organizme Not Found");
    if (oneOrganizme.length > 0) res.json({ success: true, organizme: oneOrganizme });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const allOrganizme = await Organizme.aggregate([
      { $project: { _id: 1, name: 1 } },
    ]);
    if (allOrganizme.length <= 0) throw new Error("No organization found");
    if (allOrganizme.length > 0) res.json({ success: true, organizme: allOrganizme });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const id = req.params.id;
  try {
    const organizmeExist = await Organizme.findByIdAndRemove({ _id: id });
    if (!organizmeExist) throw new Error("This Organizme not Found");
    if (organizmeExist) {
      res.json({ message: "Organizme Deleted Success" });
    }
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const id = req.params.id;
  const errors = validationResult(req);
  try {
    if (errors.isEmpty()) {
      const updateOrganizme = await Organizme.updateOne(
        { _id: id },
        { name: req.body.name }
      );
      if (!updateOrganizme) throw new Error("This Organizme Not Update");
      if (updateOrganizme) {
        res.json({ message: "Update Success" });
      }
    } else throw new Error(errors.errors[0].msg);
  } catch (error) {
    next(error);
  }
};

module.exports = { add, getOne, getAll, remove, update };
