const { MongoClient, ObjectID} = require('mongodb')

const mongoURL = 'mongodb://localhost:27017'
const dbName = 'task-manager'

MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect the DB')
    }
    console.log('Connected successfully')

    const db = client.db(dbName)
    
    // Fetching one user
    db.collection('users').findOne({name: 'Kick Buttowski'}, (err, user) => {
        if(err){
            return console.log('Unable to fetch')
        }
        console.log(user)
    })

    // Fetching by ID
    db.collection('users').findOne({_id: new ObjectID('5f8da0794561434ac9f688ad')}, (err, user) => {
        if(err){
            return console.log('Unable to fetch')
        }
        console.log(user)
    })

    // toArray method in cursor
    db.collection('users').find({age: 23}).toArray((err, users) => {
        console.log(users)
    })
    
    // To find the count
    db.collection('users').find({age: 23}).count((err, count) => {
        console.log(count)
    })

// Challenge
// 1. Use find to fetch all tasks that are not completed

    db.collection('tasks').find({completed: false}).toArray((err, task) => {
        console.log('Incompleted tasks: \n', task)
    })
})