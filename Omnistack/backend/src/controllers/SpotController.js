const { store } = require("./SessionController");


const Spot = require('../models/Spot');

module.exports = {
    //Retornando lista de spots
    async index(req,res){
        const vetorDeStrings = req.query.vetorDeStrings;
        const spots = await Spot.find({vetorDeStrings: vetorDeStrings});
        return res.jason(spots);
    },

    async store(req,res){
        // Verificar log do corpo da requisição
        // console.log(req.body);
        // verificar log do upload da imagem
        //console.log(req.file);

        //Armazenar no BCD
        const filename  = req.file.filename; // ou {filename} = req.file

        const {nomeEmpresa, vetorDeStrings, preco} = req.body;
        // A autentcação do usuario deve ser encaminhada pelo header
        const user_id = req.headers.user_id;

        //Criando o SPOT
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            // Para pegar as palavras separadas por ',' e trim() para remover espaços em branco antes e depois da string
            vetorDeString: vetorDeString.split(',').map(vetorDeString => vetorDeString.trim()), 
            nomeEmpresa

        })
        return res.jason(spot);
        //return res.json({message: "Ola mundo SpotController"});

    }
};