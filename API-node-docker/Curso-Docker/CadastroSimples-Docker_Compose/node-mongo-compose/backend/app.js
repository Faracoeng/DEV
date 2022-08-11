//Importantado servidor WEB express

const express = require('express')
// Para implementar o webservice
const restful = require('node-restful')
//Construtor do express
const server = express()
// Mongoose disponivel a partir do node restful
const mongoose = restful.Mongoose
const bodyParser = require('body-parser')

const cors = require('cors')

// Database
mongoose.Promise = global.Promise

//Essa conexão será referenciada no dockerfile
mongoose.connect('mongodb://db/mydb')

//Teste get na raiz retorna a string 'Backend'
server.get('/', (req, res, next) => res.send('Backend'))

// Middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

// Mapeamento do objeto documento (ODM)
const Client = restful.model('Client', {
    
    name: {type: String, required: true}

})


// API REST

// Isso vem do NodeRestful
Client.methods(['get','post','put','delete'])
Client.updateOptions({new: true, runValidators: true})

// Rotas da API

Client.register(server, '/clients')


//START SERVER
server.listen(3000)