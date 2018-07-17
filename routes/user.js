const user = require('../database/db').user
const route = require('express').Router()
const passport = require('../passport/passport')
route.get('/',(req,res)=>{
    user.findAll().then((data)=>{
        res.send(data).status("0001")
    })
})
route.post('/',(req,res)=>{
    user.create({

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username:req.body.username,
        password:req.body.password
    })
        .then((data)=>{
            res.redirect('http://localhost:1221/user').status('0002')})
        .catch((err)=>{
            res.send({error:"err"})
        })
})
route.post('/login', passport.authenticate('local', {

    failureRedirect: '/user/fail',
    successRedirect: '/home',
     })
);

route.get('/login',(req,res)=>{
   res.send("succrssRedirect")
})
route.get('/fail',(req,res)=>{
    res.send({message: req.flash('error')})
})



module.exports = route