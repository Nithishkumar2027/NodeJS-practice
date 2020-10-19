const { MongoClient, ObjectID} = require('mongodb')

const mongoURL = 'mongodb://localhost:27017'
const dbName = 'task-manager'

MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect the DB')
    }
    console.log('Connected successfully')

    const db = client.db(dbName)
    
    // Updating one user
    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID('5f8dc71e4561434ac9f699c2')
    }, {
        $set: {
            name: "Ramuk"
        }
    })

    updatePromise
        .then( result => console.log(result))
        .catch( err => console.log(err))
})