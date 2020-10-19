const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoURL = 'mongodb://localhost:27017'
const dbName = 'task-manager'

MongoClient.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) =>{
    if(err) {
        return console.log('Unable to connect to DB');
    }
    const db = client.db(dbName)

    // Inserting one document
    db.collection('users').insertOne({
        name: 'Kumar',
        age: 21
    } , (err, result) => {
        if(err){
            return console.log('Unable to insert user')
        }
        console.log('User inserted: \n',result.ops)
    })

    // Inserting many documents
    db.collection('users').insertMany([
        {
            name: 'Kick Buttowski',
            age: 23
        },
        {
            name: 'Gunther',
            age: 23
        }
    ], (err, result) => {
        if(err) {
            return console.log('Unable to insert documents');
        }
        console.log('Multiple users Inserted \n', result.ops)
    })

    // Challenge 🎯
    // Goal: Insert 3 tasks into a new tasks collection

    // 1. Use insertMany to insert three docs
    // - description (string), completed (boolean)
    // 2. Setup the callback to handle the error or print ops
    // 3. Run the script

    const tasks = [
        {
            description: 'First task',
            completed: true
        },
        {
            description: 'Second task',
            completed: false
        },
        {
            description: 'Third task',
            completed: true
        }
    ]
    db.collection('tasks').insertMany(tasks, (err, result) =>{
        if(err){
            return console.log('Unable to insert tasks')
        }
        console.log('Tasks inserted: \n', result.ops, '\n Challege completed 🎯');
    })
})