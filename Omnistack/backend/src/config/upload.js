//Importantdo o multer
const multer = require('multer')

module.exports = {
    //Como o muler vai armazenar imagens/arquivos que serap enviados para a aplicação
    storage: multer.diskStorage({ //armazenando no disco
        destination: path.resolve(__dirname, '..','..','uploads'),//Pasta do projeto que devem ser armazenadas as imagens, neste caso uploads na raiz do projeto fora de src
        filename: (req, file, callback) => {
            callback(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`); //Validar se vai funcionar serve para não sobrepor imagens
        },
    }),
};
