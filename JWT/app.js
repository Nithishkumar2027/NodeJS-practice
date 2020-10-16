const express = require('express')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')

const port = process.env.PORT || 3000
const app = express()

app.use(morgan('dev'))
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API 🌏'
    })
})

app.listen(port, () => console.log(`Server started at port ${port}`))