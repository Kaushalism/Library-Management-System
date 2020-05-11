const route = require('express').Router()

route.use('/book_class', require('./book_class'))
route.use('/book_nav', require('./book_nav'))

exports = module.exports = {
    route
}