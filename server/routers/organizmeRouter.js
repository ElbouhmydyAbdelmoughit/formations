const organizmeRouter = require("express").Router()
const {check} = require("express-validator")
const {add,getAll,remove,update } = require("../controllers/organizmeController")


organizmeRouter.post('/add',[
  check("name","Name is required").not().isEmpty()
],add)
organizmeRouter.post('/add',getAll)
organizmeRouter.post('/add',remove)
organizmeRouter.post('/add',update)

module.exports = organizmeRouter