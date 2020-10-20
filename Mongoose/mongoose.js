const mongoose = require('mongoose')

// Establishing connection
mongoose.connect('mongodb://localhost:27017/task-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})
