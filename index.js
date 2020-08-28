const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, '/')))
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res, next) => {
    res.render('index', {})
})

app.listen(5100, () => console.log('Running on Port 5100'))
