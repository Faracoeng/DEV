// Métofdos:
// index: Retorna uma listagem de sessoes
// show: Retorna uma unica sessão
// store: Criar uma sessao
// update: Atualizar uma sessão
// destroy: Remover/Deletar uma sessão

// Para criar o usuario é necessario importar o Model User
const User = require('../models/User');

// exportar um objeto
module.exports = {

// Essa função pode demorar para executar, então podemos tornar ela assincrona    
  async store(req,res) {
      // Para cadastrar o e-mail no BCD temos que pegar o corpo da requisição
      //Lê de tras pra frente: "Pegar o campo email do corpo (body) da requisição (req)"
      const email = req.body.email
    // Forma equivalente de escrever essa linha (Desestruturação)
    // const {email} = req.body;

// await faz com que aguarde o usuario ser criado/validade no banco caso demore

  //Para o caso do usuario ja existir no BCD
  //Existem varias formas de buscar o user, vamos buscar pelo email
  // pois é so o que temos
  // Se encontrar o usurio vai armazenar na variavel user
    let user = await User.findOne({email:email});
    //Se o usuario não for encontrado no bcd
    if(!user){
        user = await User.create({email});
        // Deverá retornar os dados de cadastro dentro do banco de dados
    }
    return res.json(user);
  } 
};
