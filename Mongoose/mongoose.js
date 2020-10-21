const mongoose = require('mongoose')
const validator = require('validator')

// Establishing connection
mongoose.connect('mongodb://localhost:27017/task-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// Schema for users
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.includes('password')){
                throw new mongoose.Error('Password cannot contain password. Try unique one')
            }
        }
    }
})

// User Model creation
const User = mongoose.model('User', userSchema)

// Creating user document
const me = new User({
    name: 'John',
    email: 'hellow@gmail.com',
    password: 'notapass word'
})

me.save().then( result => console.log(result)).catch(err => console.log(`Error: ${err}`))

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