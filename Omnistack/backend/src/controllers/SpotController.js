const { store } = require("./SessionController");

module.exports = {
    async store(req,res){
        return res.json({message: "Ola mundo SpotController"});
    }
};