
const mongoose = require ('mongoose');

// Define estrutura da entidade USER
const UserSchema = new mongoose.Schema({
    email: String,
    //poderia ser também
    // name: String,
    // idade: Number,
    // status: Boolean,
});

// Exportando a entidade
module.exports = mongoose.model('User', UserSchema );