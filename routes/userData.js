const fs = require('fs')

let users = JSON.parse(fs.readFileSync('./userData.json'))

module.exports = users