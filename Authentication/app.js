const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('dotenv').config()

const port = process.env.PORT
const mongoDB = process.env.mongoDB_URI

const User = require('./models/user')

const app = express()

// Mongoose section
mongoose.connect(mongoDB, {useUnifiedTopology: true, useNewUrlParser: true})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo connection error"))

app.use(express.static('public'))

// Setting up view engine
app.set('views', "views") //Setting views directory for views
app.set('view engine', 'hbs') // Setting view engine as handlebars

// Session and passport
app.use(session({
    secret: "cats",
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => res.render('index', { title: 'Authentication'}))

// Signup routes
app.get('/signup', (req, res) => res.render(('signup'), {title: 'Signup'}))
app.post('/signup', (req, res, next) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save(err => {
        if(err) {
            return next(err)
        }
        res.redirect('/')
    })
})


app.listen(port, () => console.log(`Server running at http://localhost:${port}/`))