
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    db.collection('TodoList').findOneAndUpdate({
        _id: new ObjectID('5bdd52c257bdb4f8f8b6ff52')
    }, {
        $set: {
            text: 'Buy a spaceship'
        }
    }, {
        returnOriginal: false
    }).then(res => {
        console.log(res);
    })
}); 