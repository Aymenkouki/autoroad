const express = require ('express');
const Cars = require('../models/cars');
const router = express.Router();
module.exports=router;
const multer= require('multer');

const myStorage=multer.diskStorage({
    destination:'./carsImages',
    filename:(req,file,redirect)=>{
        let fl=Date.now()+'.'+file.mimetype.split('/')[1]
        redirect(null,fl);
        filename=fl;
    }
})

filename='';
const upload=multer({storage:myStorage});

router.post('/ajout', upload.any('image') , (req,res)=>{
    let data = req.body;
    let Car = new Cars(data);
    Car.image = filename;
    Car.save()
    .then(
        (result)=>{
            res.send(result)
            filename='';
        }
    )
    .catch(
        (error)=>{
            res.send(error)
        }
    )
});