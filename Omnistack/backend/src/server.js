// Arquivo inicial, aqui inicializa o servidor

//Primeiro importar o express, pode ser uma constante
const express = require('express'); // require é para importar uma dependência externa

//Criar aplicação, pode ser constante denovo, express() é uma função

const app = express();

//app.get(rota de acesso ao conteudo, (req, res){});
//req é um parametro que possui uma requisição, res é a resposta associada a esta requisição, 
// por exemplo solicitar o preço de um produto em req, e responder o preço em res 

//Neste caso, utilizando '/' como rota de acesso ao conteúdo, é como se fosse uma
// requisição na capa do projeto, poderia ser em '/outraPastaNoProjeto/conteúdoDeResposta'
app.get('/', (req, res) => {

    return res.send("inserir qualquer texto de resposta") // é o método mais simples de reposta
});

// Iniciar aplicação na porta 3333, apnas como teste
// Da pra acessar aplicação através de (localhost:3333), em um navegador por exemplo
app.listen(3333);
