const mongoose = require('mongoose')
const { model } = require('../Authentication/models/user')

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

// me.save().then( result => console.log(result)).catch(err => console.log(`Error: ${err}`))

// Challenge
// Goal: Create a model for tasks
// 1. Define the model with description and completed tasks
// 2. Create a new instance of the model
// 3. Save the model to the database
// 4. Test your work

// Schema for tasks
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})

// Model for tasks
const Task = mongoose.model('Task', taskSchema)

const newTask = new Task({
    description: 'Always be updated',
    completed: true
})

newTask.save()
    .then( result => console.log('Task inserted: \n',result ))
    .catch( err => console.log('Error: \n', err))