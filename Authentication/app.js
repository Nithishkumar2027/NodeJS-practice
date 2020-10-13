const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static('public'))
// Setting up view engine
app.set('views', "views") //Setting views directory for views
app.set('view engine', 'hbs') // Setting view engine as handlebars

app.get('/', (req, res) => {
    res.render('index', { title: 'Authentication'})
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`))