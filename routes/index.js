const route = require('express').Router()


route.use('/product',require('./product'))
route.use('/user',require('./user'))

module.exports = route