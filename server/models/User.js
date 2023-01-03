const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userShema = mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please Enter Name"]
  },
  email:{
    type:String,
    required:[true,"Please Enter Email"],
    unique: true,
  },
  phone:{
    type:Number,
    required:[true,"Please Enter Phone"]
  },
  hash_password:{
    type:String,
    required:[true,"Please Enter Password"]
  },
  organisme_id:{
    type:String,
    required:true,
  },
  role_id:{
    type:String,
    required:true,
    unique: true,
  },
  formation_id:{
    type:String,
    required:true,
  }
})

module.exports = mongoose.model('User',userShema)