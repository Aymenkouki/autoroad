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


router.get('/getall',(req,res)=>{
    Cars.find()
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
});

router.delete('/supprimer/:id', (req,res)=>{
    let myId = req.params.id;
    Cars.findByIdAndDelete({_id:myId})
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
});

router.put('/update/:id', upload.any('image') , (req,res)=>{
    let myId = req.params.id;
    let newdata=req.body;
    if(filename.length>0){
        newdata.image=filename}

    Cars.findByIdAndUpdate({_id:myId},newdata)
    .then(
        (result)=>{
            res.send(result)
            filename='';

        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
});

router.get('/getbyNom/:nom', (req,res)=>{
    let myNom = req.params.nom;
    Cars.find({nom:myNom})
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )

});