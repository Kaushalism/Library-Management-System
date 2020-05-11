const book_class = require('../../db').book_class
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
    book_class.findAll()
        .then((book_classs) => {
            res.status(200).send(book_classs)
            
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve data"
            })
        })
})

route.post('/', (req, res) => {
// Add a new book
    book_class.create({
        Id : req.body.Id,
        Name: req.body.Name,
        Genre: req.body.Genre,
        LoanStatus: req.body.LoanStatus,
        Copies: req.body.Copies
    }).then((book_class) => {
        res.status(201).send(book_class)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding book"
        })
    })
})

exports = module.exports = route