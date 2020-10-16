const express = require('express')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')

const port = process.env.PORT || 3000
const app = express()

app.use(morgan('dev'))

// Routes
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API 🌏'
    })
})

app.post('/api/posts', (req, res) => {
    res.json({
        message: 'Post created 🤗'
    })
})

app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'Kumar',
        email: 'kumar@gmail.com'
    }

    jwt.sign({user: user}, 'secretkey', (err, token) =>{
        res.json({
            token: token
        })
    })
})

app.listen(port, () => console.log(`Server started at port ${port}`))