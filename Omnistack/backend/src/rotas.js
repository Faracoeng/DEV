// Estes arquivos serve para colocar as rotas do projeto, para naos
// acumular tudo em server.js

// Importar novamente o express
const { Router } = require('express');
const express = require('express');

//Importando o Controller
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

// Router() é uma funcionalidade do express responsável por tratar as rotas
// a variavel "routes" agora possui todos os metodos de rotas do http
const routes = express.Router();

// Inicialmente o usuário deverá se logar, a primeira rota a ser criada é criar o usuario que for informado no DB:
// Criado MVC dentro de SRC
// (models): Uma tabela do BCD, uma entidade na aplicação como um usuario por exemplo
// (view)s: Não vai ter pois é uma AṔI Rest, o Views vai ser REACT/REACTNative 
// (controllers): Onde vai a regra de negocio da aplicação, ele recebe a requisição,
//faz todo o processo, ou seja, a regra de negocio, e devolve uma resposta

// MIGRANDO A ROTA QUE ESTAVA NO server.js
routes.post('/sessions',(SessionController.store));
//Rota do spot
routes.post('/spot',(SpotController.store));


// É necessario exportar as rotas deste arquivo para a 
// aplicação ter conhecimento da existencia delas

module.exports = routes;