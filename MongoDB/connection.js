const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoURL = 'mongodb://localhost:27017'
const dbName = 'task-manager'

MongoClient.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect to database')
    }
    console.log('Connected successfully')
    const db = client.db(dbName)
    db.collection('users').insertOne({
        name: 'Ijaan',
        age: 19
    })
})