// Etidade "Spot" de cada usuário
const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    // Imagem sera uma String, salvaremos apenas o nome dela, o arquivo em si ficara no projeto da aplicação
    thumbnail: String,
    nomeEmpresa: String,
    preco: Number,
    // NO banco de dados os dados serão salvos na forma de vetor de strings
    vetorDeString: [String],
    //Qual usuario inseriu estes dados?
    // Abaixo a referencia pro usuario que criou este spot
    user: {
        type: mongoose.Schema.Types.ObjectId,
        //referência ao model user
        ref: 'User'
    }

});

module.exports = mongoose.model('Spot',SpotSchema);