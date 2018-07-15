const user = require('../database/db').user
const route = require('express').Router()

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
        res.redirect('http://localhost:1221/product').status('0002')})
            .catch((err)=>{
            res.send({error:err})
        })
    })



module.exports = route