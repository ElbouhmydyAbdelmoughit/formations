const organizmeRouter = require("express").Router()
const {add,getAll,remove,update } = require("../controllers/organizmeController")


organizmeRouter.post('/add',add)
organizmeRouter.post('/add',getAll)
organizmeRouter.post('/add',remove)
organizmeRouter.post('/add',update)

module.exports = organizmeRouter