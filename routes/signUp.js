const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

const users = (require('./userData'))

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../views', 'signUp.ejs'))
})

let user = [...users]
router.post('/', (req, res, next) => {
    let data = req.body
    let found = null
    let succesful = { msg: "succesful" }
    let unsuccesful = { msg: "username already taken" }
    found = user.find(element => element.username === data.username);
    if (found === undefined) {
        user.push(data)
        fs.writeFile('userData.json', JSON.stringify(user), (err) => {
            if (err) return next(err);

            res.json(succesful)
            next();
        })
    } else {
        res.json(unsuccesful)
    }

})

router.get('/succesful', (req, res) => {
    res.render(path.join(__dirname, '../views', 'succesful.ejs'))
})
module.exports = router