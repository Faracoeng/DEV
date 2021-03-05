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

}, { //Encaminhando algumas configurações pro mongoose sobre o SpotSchema.virtuals
    toJSON: { // Todas vez que um Spot for convertido em jason, ou seja o objeto acima
        virtuals: true //  compute junto os virtuals
    }

}
);

// Criado este parametro que não vai pro banco, apenas sera computado pelo JavaScript

SpotSchema.virtual('thumbnail_url').get(function(){
    // Rteornando a imagem, é preciso criar a rota que vai retornar a imagem
    // Eu quem defino a URL
    return 'http://localhost:3334/files/${this.thumbnail}' 
})

module.exports = mongoose.model('Spot',SpotSchema)/file/$this;