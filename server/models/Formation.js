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
    type:String,
    required:[true,"Please Add Image"]
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

module.exports = mongoose.model('Formation',formationSchema)