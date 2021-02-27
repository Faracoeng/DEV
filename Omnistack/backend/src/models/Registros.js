const mongoose = require('mongoose');

const Registros = new mongoose.Schema({

    data: String,
    status: Boolean,
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        //referência ao model user
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        //referência ao model user
        ref: 'Spot'
    }

});

module.exports = mongoose.model('Spot',SpotSchema);