const mongoose = require('mongoose')

const userShema = mongoose.Schema({
  name:{
    type:String,
  },
  email:{
    type:String,
    unique: true,
  },
  password:{
    type:String,
  },
  role:{
    type:String,
    default:"employee"
  },
  organisme:{
    type:String,
  },
})

module.exports = mongoose.model('User',userShema)