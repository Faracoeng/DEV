// Arquivo inicial, aqui inicializa o servidor

//Primeiro importar o express, pode ser uma constante
const express = require('express'); // require é para importar uma dependência externa
// Importanto as rotas de rotas.js
// é bom colocar o caminho relativo "./"
const routes = require('./rotas.js');
// Importar mongoose
const mongoose = require('mongoose');

const app = express();

// Conectar com a url do BCD
// URL FORNECIDA NO CONNECT DO MONGODBATLAS: mongodb+srv://andre_db:<password>@cluster0.qpahl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// É NECESSÁRIO AJUSTAR USUARIO E SENHA CRIADOS NO USUÁRIO DO BCD NO MONGODB
mongoose.connect('mongodb+srv://andre_db:andre_db@cluster0.qpahl.mongodb.net/andre_Database?retryWrites=true&w=majority',{
    // Encaminhar objeto como parametro
    // Não tem problema se nao colocar, é só para corrigir um aviso
    useNewUrlParser : true,
    useUnifiedTopology: true,
});


//express() por padrão não utiliza JSON, o trecho abaixo é como se fosse um plugin,
// que serve para ele interpretar JSON e entregar nas requisições
app.use(express.json());
app.use(routes);

// Iniciar aplicação na porta 3333, apnas como teste
// Da pra acessar aplicação através de (localhost:3333), em um navegador por exemplo
app.listen(3334);













// ------------------------------ Resumo sobre rotas no projeto----------------------------------------------------------

// Métodos: GET, POST, PUT, DELETE (Mais importantes dentro de uma API Rest)

//GET: Buscar informação do Backend
//POST: Criar nova informação no Backend
//PUT: Editar informação no Backend
//DELETE: Deletar informação do Backend

// OBS: Rota do tipo POST, nao da pra executar pelo navegador, pois ele so executa GET
// é necessario utilizar outra ferramenta para testar todos os métodos
//Utilizar: insomnia (insomnia.rest)

// -------------------------------------------------------------------------------------------------------------------

//Criar aplicação, pode ser uma constante denovo, express() é uma função


//app.get(rota de acesso ao conteudo, (req, res){});
//req é um parametro que possui uma requisição, ou seja, possui todas as infomações
// que o usuário esta enviando, res é a resposta associada a esta requisição, 
// por exemplo o usuario envia o carrinho de compras dele no req, neste caso o usuário seria o navegador, 
// em res responde-se o desejado ao usuário.  

// Neste caso, utilizando '/' como rota de acesso ao conteúdo, é como se fosse uma
// requisição na capa do projeto, poderia ser em '/outraPastaNoProjeto/conteúdoDeResposta'

//Rota do tipo GET
//app.get('/', (req, res) => { //Função esta no formato "Arrow Function"

    // return res.send("Olá Mundo")  --->   // é o método mais simples de reposta

    // Como este projeto visa desenvolver uma API REST, não se entrega um texto 
    // pronto e sim uma estrutura de dados, neste caso utilizaremos json
    //Abaixo a forma correta e estruturada de enviar a frase
    
    // return res.json({message: "Olá Mundo"});

    // Teste de parâmetros Query na rota GET (http://URL/rota?filtrodesejado).
    // Por exemplo para filtrar usuario com idade de 20 anos ficaria:
    // http://dominiodoprojeto.com.br/usuario?idade=20

    // Para acessar esta requisição filtrada basta fazer:
    // return res.json({idade: req.query.idade}) //req.query acessa os parametro query enviado pelo navegador/cliente

//});

////Rota do tipo POST
//app.post('/usuarios', (req,res) =>{
    // return res.json({message: "Hello World"});    ---> só pra teste

    // Montando o Corpo da requisição [Body] (JSON):
    // Colocar este trecho no insomnia ou postmen para simular a requisição

// ---------------------------------------------------------------
// {
//    "nome": "Fulano",
//    "email": "fulano@dominiodofulano.com"
// }
// ---------------------------------------------------------------
//    return res.json(req.body);   // req.body acessa o corpo da requisição (criação/edição)
                                // Pode retornar ele direto porque ja é um JSON
//});


// Editar ou deletar uma informação (PUT/DELETE):

//É NECESSÁRIO FILTRAR A BUSCA PELA INFORMAÇÃO QUE SE DESEJA EDITAR OU DELETAR:
// Encaminhando usuario com id=1 por exemplo: (http://dominiodoprojeto.com.br/usuario/1)

//Pegando o parametro no Server (PUT):

// app.put('/usuarios/:id', (req, res) => {

    //return res.json({id: req.params.id});  //req.params acessa route params, para (PUT e DELETE)

//});




