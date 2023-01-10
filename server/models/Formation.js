const  mongoose = require('mongoose')

const formationSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please Enter Name"]
  },
  description:{
    type:String,
    required:[true,"Please Enter Description"]
  },
  image:{
    data:Buffer,
    contentType:String,
    required:[true,"Please Enter Image"]
  },
  dubet_date: {
    type: Date,
    required: [true,"Please Enter Dubet Date"]
  },
  final_date: {
    type: Date,
    required: [true,"Please Enter Final Date"]
  },
  organizme:{
    type:String,
    required:true,
  }
})

module.exports = mongoose.model('formation',formationSchema)