const mongoose = require('mongoose');
const login=mongoose.model('login',{
    name:String,
    lastname:String,
    email:String,
    age:Number,
    CIN:Number,
    phone:Number,
    permi:Number,
    password:String,
    admin:Boolean
})

module.exports = login;