// Estes arquivos serve para colocar as rotas do projeto, para naos
// acumular tudo em server.js

// Importar novamente o express
const { Router } = require('express');
const express = require('express');

// Router() é uma funcionalidade do express responsável por tratar as rotas
// a variavel "routes" agora possui todos os metodos de rotas do http
const routes = express.Router();

// MIGRANDO A ROTA QUE ESTAVA NO server.js
routes.post('/usuarios',(req,res) => {

    return res.json(req.body);

});

// É necessario exportar as rotas deste arquivo para a 
// aplicação ter conhecimento da existencia delas

module.exports = routes;