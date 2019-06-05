const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongo = 'mongodb://localhost:27017/teste'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//Conectando DB
mongoose
    .connect(mongo, { useNewUrlParser: true })

// Routes
const users = require('./routes/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Habilitando CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
})

app.use('/', users)

module.exports = app