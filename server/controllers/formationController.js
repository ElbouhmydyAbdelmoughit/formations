const Formation = require('../models/Formation')

const add = () =>{

}

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
  const id  = req.params.id
  try {
    const oneFormation = await Formation.findById({_id:id});
    if (!oneFormation) throw new Error("This Formation Not Found");
    if (oneFormation) res.json({ success: true, formation: oneFormation });
  } catch (error) {
    next(error);
  }
};

const remove = () =>{
  
}

const update = () =>{
  
}

module.exports = {add, getAll, getOne, remove, update}