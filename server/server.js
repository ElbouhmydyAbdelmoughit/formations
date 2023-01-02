const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./model/User')
const env = require('dotenv').config()
const db_config = require('./config/db.config') 


// console.log(dotenv)
app.use(express.json())

app.post('/user',async(req,res)=>{
  const {name} = req.body
  const user = await User.create({name})
  res.json({message:user})
})



app.listen(process.env.PORT,()=>{
  console.log(`port runing ${process.env.PORT}`)
})