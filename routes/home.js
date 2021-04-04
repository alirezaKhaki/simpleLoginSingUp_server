const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
let users = (require('./userData'))

// let user = [...users]
router.get('/', (req, res, next) => {


    res.render(path.join(__dirname, '../views', 'home.ejs'))

})
router.get('/home', (req, res, next) => {


    res.render(path.join(__dirname, '../views', 'home.ejs'))

})

router.get('/home/:id', (req, res, next) => {
    let id = req.params.id
        // console.log(id);
        // res.send(id)
    console.log(id);
    for (let i in users) {
        if (users[i].username === id) {
            users[i].isLoggedIn = false
        }
    }
    fs.writeFile('userData.json', JSON.stringify(users), (err) => {
        if (err) return next(err);

        next();
    })


    res.render(path.join(__dirname, '../views', 'home.ejs'))

})

module.exports = router