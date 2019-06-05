const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = require('../app')

const server = http.createServer(app);

server.listen(3001, err => {
    if (err) {
        console.log('Erro ao rodar o servidor')
    } else {
        console.log('Servidor rodando!')
    }
})