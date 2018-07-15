const sequelize = require('sequelize')
const db = new sequelize('test1','root','singh7272',{
    host: "localhost",
    dialect: 'mysql',
    pool:{
        max:5,
        min:0
    }})

const user = db.define('person',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement:true,
        allowNull:true,
        primaryKey:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false,
         },
    email:{
        type:sequelize.STRING,
        allowNull:false
          },
    pasword:{
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








