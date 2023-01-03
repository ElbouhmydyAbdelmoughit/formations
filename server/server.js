const express = require('express')
const app = express()
const User = require('./models/User')
const env = require('dotenv').config()
const { error, success } = require("consola");
const dbConfig = require('./config/dbConfig') 
// const cors = require('cors')

app.use(express.json())


app.listen(process.env.PORT,()=>{
  success({message:`port runing ${process.env.PORT}`,badge:true})
})