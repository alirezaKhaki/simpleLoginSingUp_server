const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const users = (require('./userData'))

router.use("/", express.static('./views'))

let data = null
let check = { "username": "wrong email or password" }
let user = [...users]
router.post('/', (req, res, next) => {
    data = req.body
    console.log(1234);
    for (let i in user) {

        if (user[i].username === data.username && user[i].password === data.password) {
            user[i].isLoggedIn = true
            check = user[i]
            fs.writeFile('userData.json', JSON.stringify(user), (err) => {
                if (err) return next(err);
                next();
            })
        }
    }
    res.status(200).json(check);
})

router.get('/found/:id', (req, res) => {
    let req_user = req.params.id
    let user_id = null
    for (let i in users) {
        if (req_user === users[i].username) {

            user_id = users[i]
            if (user_id.isLoggedIn != false) {
                res.render(path.join(__dirname, '../views', 'user.ejs'), { user_id })
            } else {
                res.render(path.join(__dirname, '../views', 'oops.ejs'))
            }
        }
    }



})
router.get('/succesful', (req, res) => {
    res.render(path.join(__dirname, '../views', 'succesful.ejs'))
})
router.get('/unsuccesful', (req, res) => {
    res.render(path.join(__dirname, '../views', 'oops.ejs'))
})
module.exports = router