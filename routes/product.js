const product = require('../database/db').product
const route = require('express').Router()

route.get('/',(req,res)=>{
    product.findAll().then((data)=>{
        res.send(data).status("0003")
    })
})
route.post('/',(req,res)=>{
    product.create({
        name:req.body.name,
        price: req.body.price,
        image:req.body.image
    })
        .then((data)=>{
        res.redirect('http://localhost:1221/product').status("0004")
    })
        .catch((err)=>{
        res.send({error:err})
    })
})


module.exports = route