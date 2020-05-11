
const Sequelize = require('sequelize')

const db = new Sequelize('book_classification', 'administrator', 'adminpass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const book_class = db.define('books_class', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Genre:{
        type: Sequelize.STRING
    },
    LoanStatus:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    Copies:{
        type: Sequelize.INTEGER,
        allowNull: false
    }

})
const book_nav = db.define('books_nav', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Floor:{
        type: Sequelize.INTEGER
    },
    AlmirahNo:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Shelf:{
        type: Sequelize.INTEGER,
        allowNull: false
    }

})





db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    book_class,book_nav
}