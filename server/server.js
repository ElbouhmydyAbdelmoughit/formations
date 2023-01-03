const express = require('express')
const app = express()
const User = require('./models/User')
const env = require('dotenv').config()
const { error, success } = require("consola");
const dbConfig = require('./config/dbConfig') 
const authRouter = require('./routers/authRouter')

app.use(express.json())
app.use('/auth',authRouter)

app.listen(process.env.PORT,()=>{
  success({message:`port runing ${process.env.PORT}`,badge:true})
})