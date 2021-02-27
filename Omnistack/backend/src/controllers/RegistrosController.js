const { store } = require("./SessionController");

const Booking = ('../models/Registros');

module.exports = {
    //Criando nova reserva
    async store(req,res){
        const user_id = req.headers.user_id;
        const spot_id = req.params.spot_id;
        const date = req.body.date;

        const registros = await Booking.create({

            user: user_id,
            spot: spot_id,
            date,
        });

        // Para preencher os dados
        await registros.populate('spot').populate('user').execPopulate();

        return res.json(registros);
        
    }
}