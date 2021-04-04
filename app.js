const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const bodyParser = require("body-parser");

const home = require('./routes/home')
const login = require('./routes/loggin')
const sigUp = require('./routes/signUp')
const edit = require('./routes/edit')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/", express.static('./views'))


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use('/', home)
app.use('/loggin', login)
app.use('/signup', sigUp)
app.use('/edit', edit)

app.listen(5000, () => {
    console.log('server is up on port 5000');
})