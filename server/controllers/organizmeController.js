const Organizme = require("../models/Organisme");

const add = async (req,res,next) =>{
  try {
    const organizme = await new Organizme({
      name:req.body.name
    })
    if (organizme) {
      const organizmeSaved =await organizme.save()
      res.send(organizmeSaved)
    }
  } catch (error) {
    next(error)
  }
}

const getAll = async (req,res,next) =>{}
const remove = async (req,res,next) =>{}
const update = async (req,res,next) =>{}



module.exports = { add, getAll, remove, update };
