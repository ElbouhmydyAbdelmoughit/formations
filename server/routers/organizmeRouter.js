const organizmeRouter = require("express").Router()
const {check} = require("express-validator")
const {add,getAll,remove,update } = require("../controllers/organizmeController")


organizmeRouter.post('/add',[
  check("name","Name is required").not().isEmpty()
],add)
organizmeRouter.get('/',getAll)
organizmeRouter.delete('/remove/:id',remove)
organizmeRouter.post('/update/:id',update)

module.exports = organizmeRouter