//Importantdo o multer
const multer = require('multer');
const path = require('path');

module.exports = {
    //Como o muler vai armazenar imagens/arquivos que serap enviados para a aplicação
    storage: multer.diskStorage({ //armazenando no disco
        destination: path.resolve(__dirname,'..','..','uploads'), //Pasta do projeto que devem ser armazenadas as imagens, neste caso uploads na raiz do projeto fora de src
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            callback(null,`${name}-${Date.now()}${ext}`); //Validar se vai funcionar serve para não sobrepor imagens
        },
    }),
};
