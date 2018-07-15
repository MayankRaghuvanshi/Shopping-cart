const express = require('express')
const server = express()
//server.use(express.json)
server.use(express.urlencoded({
    extended:true
}))

server.use('/',express.static(__dirname+'/public/'))



server.get('/',(req,res)=>{
    res.send('running')
})
server.use('/',require('./routes/index'))





server.listen(1221, ()=>{
    console.log("server is running at http://localhost:1221/home.html")
})