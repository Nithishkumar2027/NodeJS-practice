const mongoose = require('mongoose')

// Establishing connection
mongoose.connect('mongodb://localhost:27017/task-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// Model creation
const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// Creating a document
const me = new User({
    name: 'John',
    age: 18
})

me.save().then( result => console.log(result)).catch(err => console.log(`Error: ${err}`))