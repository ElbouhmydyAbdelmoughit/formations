const env = require("dotenv").config();
const mongoose = require("mongoose");


mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  
}).catch(err =>{
  console.log(err)
})
