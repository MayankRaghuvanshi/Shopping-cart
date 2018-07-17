const sequelize = require('sequelize')
const db = new sequelize('test1','root','singh7272',{
    host: "localhost",
    dialect: 'mysql',
    pool:{
        max:5,
        min:0
    }})

const user = db.define('users',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement:true,
        allowNull:true,
        primaryKey:true
    },
    firstname:{
        type:sequelize.STRING,
        allowNull:false,
         },
    lastname:{
        type:sequelize.STRING,
        allowNull:false,
    },
    username:{
        type:sequelize.STRING,
        allowNull:false
          },
    password:{
        type:sequelize.STRING,
        allowNull:false
          }})


const product= db.define('item',{
    id:{
        type: sequelize.INTEGER,
        allowNull:true,
        primaryKey:true,
        autoIncrement:true

    },
    name:{
        type:sequelize.STRING,
         },
    price:{
      type:sequelize.INTEGER,
      allowNull:false
    },

    image:{
        type: sequelize.STRING,
        allowNull: true
          }})




db.sync().then(()=>{
    console.log("database has been synced")
}).then((err)=>{
    console.error(err)
})

exports = module.exports={
    user,product
}








