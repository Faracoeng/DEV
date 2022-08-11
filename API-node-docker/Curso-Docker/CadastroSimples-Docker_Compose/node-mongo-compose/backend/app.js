//Importantado servidor WEB express

const express = require('express')
// Para implementar o webservice
const restful = require('node-restful')
//Construtor do express
const server = express()
// Mongoose disponivel a partir do node restful
const mongoose = restful.Mongoose

// Database

mongoose.Promise = global.Promise

mongoose.connect('mongodb://db/mydb')

//Teste get na raiz retorna a string 'Backend'
server.length('/', (req, res, next) => res.send('Backend'))

//START SERVER
server.listen(3000)