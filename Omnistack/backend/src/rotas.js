// Estes arquivos serve para colocar as rotas do projeto, para naos
// acumular tudo em server.js

// Importar novamente o express
const { Router } = require('express');
const express = require('express');
//Para receber o upload da imagem, importar o multer
const multer = require('multer');
const uploadConfig = require('./config/upload'); 

//Importando o Controller
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/RegistrosController')
// Router() é uma funcionalidade do express responsável por tratar as rotas
// a variavel "routes" agora possui todos os metodos de rotas do http
const routes = express.Router();
const upload = multer(uploadConfig);

// Inicialmente o usuário deverá se logar, a primeira rota a ser criada é criar o usuario que for informado no DB:
// Criado MVC dentro de SRC
// (models): Uma tabela do BCD, uma entidade na aplicação como um usuario por exemplo
// (view)s: Não vai ter pois é uma AṔI Rest, o Views vai ser REACT/REACTNative 
// (controllers): Onde vai a regra de negocio da aplicação, ele recebe a requisição,
//faz todo o processo, ou seja, a regra de negocio, e devolve uma resposta

// MIGRANDO A ROTA QUE ESTAVA NO server.js
routes.post('/sessions',(SessionController.store));
//Rota do spot
routes.post('/spot',(upload.single('thumbnail'),SpotController.store));
// Rota de listagem de spots
routes.get('/spot',(SpotController.index));
//Rota de listagem de spots do usuário logado
routes.get('/dashboard',(DashboardController.show));
//Criando uma rota encadeada
routes.post('/spots/:spot_id/registros', RegistrosController.store);





// É necessario exportar as rotas deste arquivo para a 
// aplicação ter conhecimento da existencia delas

module.exports = routes;