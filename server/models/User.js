const mongoose = require('mongoose')

const userShema = mongoose.Schema({
  name:{
    type:String,
  },
  email:{
    type:String,
    unique: true,
  },
  phone:{
    type:Number,
  },
  password:{
    type:String,
  },
  role:{
    type:String,
    default:"employee"
  },
  organisme_id:{
    type:String,
  },
  formation_id:{
    type:String,
  }
})

module.exports = mongoose.model('User',userShema)