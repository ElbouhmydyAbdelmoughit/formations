const  mongoose = require('mongoose')

const formationSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please Enter Name"]
  },
  city:{
    type:String,
    required:[true,"Please Enter City"]
  },
  address:{
    type:String,
    required:[true,"Please Enter Address"]
  },
  phone:{
    type:Number,
    required:[true,"Please Enter Number"]
  }
})

module.exports = mongoose.model('formation',formationSchema)