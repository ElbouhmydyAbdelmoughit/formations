const mongoose = require("mongoose");

const organismeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please Enter Name"]
  },
  image: {
    data: Buffer,
    contentType: String,
    required: [true,"Please Enter Image"]
  },
  dubet_date: {
    type: Date,
    required: [true,"Please Enter Dubet Date"]
  },
  final_date: {
    type: Date,
    required: [true,"Please Enter Final Date"]
  },
});

// how to hash password using bcryptjs in express js and mongoose ?

module.exports = mongoose.model('oranisme',organismeSchema)