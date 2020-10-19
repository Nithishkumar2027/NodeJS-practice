const { MongoClient, ObjectID} = require('mongodb')

const mongoURL = 'mongodb://localhost:27017'
const dbName = 'task-manager'

MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect the DB')
    }
    console.log('Connected successfully')

    const db = client.db(dbName)
    
    // Deleting a document
    const deleteMany = db.collection('users').deleteMany({
        age: 20
    })

    deleteMany
        .then( result => console.log(result))
        .catch( err => console.log(err))

    const deleteTask = db.collection('tasks').deleteMany({
        completed: false
    })

    deleteTask
        .then( result => console.log(result))
        .catch( err => console.log(err))
})