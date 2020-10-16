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

app.post('/api/posts', verifyToken ,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData)=>{
        if(err) {
            res.sendStatus(400)
        } else {
            res.json({
                message: 'Post created 🤗',
                authData,
            })
        }
    })
    
})

app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'Kumar',
        email: 'kumar@gmail.com'
    }

    jwt.sign({user}, 'secretkey', (err, token) =>{
        res.json({
            token
        })
    })
})

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verifying token
function verifyToken(req, res, next) {
    // Get the Auth header value
    const bearerHeader = req.headers['authorization']
    // Checking if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        // Split at the space in token
        const bearer = bearerHeader.split(' ')

        // Get token from array
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    } else {
        res.status(400).json({
            //Forbidden message
            msg: 'Forbidden 🚫'
        })
    }
}

app.listen(port, () => console.log(`Server started at port ${port}`))