const express = require ('express');
const login = require('../models/login');
const router = express.Router();
module.exports=router;
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');


router.post('/register', (req,res)=>{
    let data = req.body;
    let log = new login(data);
    let salt = bcrypt.genSaltSync(10);
    let cryptedPass = bcrypt.hashSync(data.password,salt);
    log.password=cryptedPass;
    log.save()
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


router.post('/login', (req,res)=>{
    let data = req.body;
    login.findOne({email:data.email})
    .then(
        (result)=>{
            if(!result){
                res.send('email or password invalid !!');
            }else{
                let validPass = bcrypt.compareSync(data.password,result.password);
                if(!validPass){
                    res.send('email or password invalid !!');
                }else{
                    let payload={
                        _id:result.id,
                        email:result.email,
                        name:result.name,
                        lastname:result.lastname
                    }
                    let token = jwt.sign(payload,'123456');
                    res.send(token);
                }
            }
        }
    )
    .catch(
        (error)=>{
            res.send(error);
        }
    )
})