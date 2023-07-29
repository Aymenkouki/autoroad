const express = require('express');
const app = express();
app.use(express.json());

const cors=require('cors');
app.use(cors());

require('./config/connect');

const Cars=require('./models/cars')
const CarsRoute=require('./routes/Cars');
app.use('/Cars',CarsRoute);

const messages=require('./models/messages')
const messagesRoute=require('./routes/messages');
app.use('/messages',messagesRoute);

const login=require('./models/login')
const loginRoute=require('./routes/login');
app.use('/login',loginRoute);


app.use('/getimage', express.static('./carsImages'));

app.use(express.static('js'));
app.use(express.static('css'));

app.listen(3000,()=>{
    console.log('server works');
})