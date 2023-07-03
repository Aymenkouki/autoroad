const mongoose = require('mongoose');
const Cars=mongoose.model('Cars',{
    modele:String,
    constructeur:String,
    nom:String,
    rent:Number,
    image:String 
})

module.exports = Cars;