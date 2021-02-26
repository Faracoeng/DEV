// Métofdos:
// index: Retorna uma listagem de sessoes
// show: Retorna uma unica sessão
// store: Criar uma sessao
// update: Atualizar uma sessão
// destroy: Remover/Deletar uma sessão

// exportar um objeto
module.exports = {
  store(req,res) {
      return res.json({message: 'Hello World (Session controller)'})
  } 
};
