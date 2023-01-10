const mongoose = require("mongoose");

const organismeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please Enter Name"]
  }
});

module.exports = mongoose.model('oranisme',organismeSchema)