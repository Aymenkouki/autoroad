const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/autoroad')

//   mongodb+srv://koukiaymendhs:forzaca@cluster0.baq8dt3.mongodb.net/?retryWrites=true&w=majority

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