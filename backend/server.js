const express = require('express');
const app = express();
app.use(express.json());

require('./config/connect');

const Cars=require('./models/cars')



app.listen(3000,()=>{
    console.log('server works');
})