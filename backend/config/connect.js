const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://koukiaymendhs:forzaca@cluster0.baq8dt3.mongodb.net/?retryWrites=true&w=majority')
    .then(
        ()=>{
            console.log('connected to db !!');
        }
    )
    .catch(
        ()=>{
            console.log(erreur);
        }
    )

    module.exports = mongoose;