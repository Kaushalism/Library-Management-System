const book_nav = require('../../db').book_nav
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
    book_nav.findAll()
        .then((book_navs) => {
            res.status(200).send(book_navs)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve data"
            })
        })
})



route.post('/', (req, res) => {
// Add a new book
    book_nav.create({
        Id : req.body.Id,
        Name: req.body.Name,
        Floor: req.body.Floor,
        AlmirahNo: req.body.AlmirahNo,
        Shelf: req.body.Shelf
    }).then((book_nav) => {
        res.status(201).send(book_nav)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding data"
        })
    })
})

exports = module.exports = route