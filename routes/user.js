const user = require('../database/db').user
const route = require('express').Router()
const session = require('express-session')
route.get('/',(req,res)=>{
    user.findAll().then((data)=>{
        res.send(data).status("0001")
    })
})
route.post('/',(req,res)=>{
    user.create({

        name: req.body.name,
        email:req.body.email,
        pasword:req.body.pasword
    })
        .then((data)=>{
        res.redirect('http://localhost:1221/user').status('0002')})
            .catch((err)=>{
            res.send({error:"err"})
        })
    })
route.post('/login',(req,res)=>{
    user.findOne({where:{email:req.body.email}}).then((data)=>{
           const x=req.body.pasword
         if(!data){
            res.send("invalid user")
        }
        else if (req.body.pasword===data.pasword){
            req.session.data=data.email;
            res.send('success')
        }
        else{
            res.send("invalid password")
        }

    })
    })
route.get('/login',(req,res)=>{
    if (req.session){
        res.send("success")
    }
    else{
        res.send('log in first')
    }
})



module.exports = route