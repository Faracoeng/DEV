const Spot = require('../models/Spot');

module.exports = {
    //Listagem dos SPOTS do usuário criado
    async show(req,res){
        const user_id = req.headers.user_id;

        const spots = await Spot.find({user: user_id});
        return res.json(spots);
    }
}
