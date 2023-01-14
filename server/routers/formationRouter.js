const formationRouter = require("express").Router();
const {
  add,
  getAll,
  getOne,
  remove,
  update,
} = require("../controllers/formationController");

formationRouter.post('/add',add)
formationRouter.get('/add',getAll)
formationRouter.get('/add',getOne)
formationRouter.delete('/add',remove)
formationRouter.post('/add',update)

module.exports = formationRouter;
