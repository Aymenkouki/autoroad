const express = require('express');
const app = express();
app.use(express.json());

require('./config/connect');

const Cars=require('./models/cars')

const CarsRoute=require('./routes/Cars');
app.use('/Cars',CarsRoute);

app.use('/getimage', express.static('./carsImages'));

app.listen(3000,()=>{
    console.log('server works');
})