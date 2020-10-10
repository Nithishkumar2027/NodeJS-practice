const express = require('express')
const logger = require('./middleware/logger')
const exphbs = require('express-handlebars')

const app = express()

// Custom middleware
app.use(logger)

// Homepage route
app.get('/', (req, res) =>{
    res.send('Hello world')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`))