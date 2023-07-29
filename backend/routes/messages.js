const express = require ('express');
const messages = require('../models/messages');
const router = express.Router();
module.exports=router;

router.post('/ajout', (req,res)=>{
    let data = req.body;
    let msg = new messages(data);
    msg.save()
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (error)=>{
            res.send(error)
        }
    )
});


router.get('/getall',(req,res)=>{
    messages.find()
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
    messages.findByIdAndDelete({_id:myId})
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
