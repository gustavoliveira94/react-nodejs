const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    cpf: String,
    phone: String,
    email: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User