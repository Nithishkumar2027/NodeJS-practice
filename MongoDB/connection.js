const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoURL = 'mongodb://localhost:27017'

// Your DB name here
const dbName = 'task-manager'

MongoClient.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect to database')
    }
    console.log('Connected successfully')
    
})