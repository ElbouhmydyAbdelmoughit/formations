const express = require('express')
const app = express()
const User = require('./model/User')
const env = require('dotenv').config()
const { error, success } = require("consola");
const dbConfig = require('./config/dbConfig') 

app.use(express.json())

app.post('/user',async(req,res)=>{
  const {name} = req.body
  try {
    const user = await User.create({name})
    res.json({message:user})
    
  } catch (error) {
    res.json({message:error.message} )
  }
})



app.listen(process.env.PORT,()=>{
  success({message:`port runing ${process.env.PORT}`,badge:true})
})