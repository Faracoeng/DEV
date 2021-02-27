const Spot = require('../models/SpotSp');

module.exports = {
    //Listagem dos SPOTS do usuário criado
    show(req,res){
        const user_id = req.headers.user_id;

        const spots = await Spot.find({user: user_id});
    }
}