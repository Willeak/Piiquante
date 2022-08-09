//appel des middlewares
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//filtre des saisie de connexion 
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true }, //email requis et unique
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);