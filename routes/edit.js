const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const users = (require('./userData'))



let data = null
let check = { "msg": "loggin first" }
let user = [...users]
router.post('/:id', (req, res, next) => {
    let currentUser = null
    data = req.body
    let user_name = req.params.id
    for (let i in user) {
        if (user[i].username === user_name) {
            currentUser = user[i]
        }
    }
    console.log(currentUser);
    if (currentUser.isLoggedIn === true) {
        console.log(111);
        for (let i in user) {
            if (user[i].username === data.username) {
                user[i] = data


                fs.writeFile('userData.json', JSON.stringify(user), (err) => {
                    if (err) return next(err);
                    check = { "msg": "done" }
                    res.send(check)
                    next();
                })

                break
            }
        }
    } else {
        res.json(check)
    }




})

module.exports = router