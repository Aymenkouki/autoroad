const mongoose = require('mongoose');
const messages=mongoose.model('messages',{
    name:String,
    email:String,
    subject:String,
    msg:String
})

module.exports = messages;