const express = require('express')
const server = express()
//server.use(express.json)
server.use(express.urlencoded({
    extended:true
}))

server.use('/',express.static(__dirname+'/public/'))
server.use('/user',express.static(__dirname+'/public/user/'))
server.use('/product',express.static(__dirname+'/public/product/'))



server.get('/',(req,res)=>{
    res.send('running')
})
server.use('/',require('./routes/index'))





server.listen(1221, ()=>{
    console.log("server is running at http://localhost:1221/home.html")
    console.log(("Sign up at http://localhost:1221/user/signup.html "))
    console.log(("Sign up at http://localhost:1221/user/signin.html "))
    console.log(("Sign up at http://localhost:1221/product/add-Product.html "))

})