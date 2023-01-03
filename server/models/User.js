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
  hash_password:{
    type:String,
  },
  organisme_id:{
    type:String,
  },
  role_id:{
    type:String,
    unique: true,
  },
  formation_id:{
    type:String,
  }
})

module.exports = mongoose.model('User',userShema)