
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    /* db.collection('TodoList').deleteMany({text: 'Watch a movie'}).then(res => {
        console.log(res);
    }); */

    db.collection('TodoList').findOneAndDelete({completed: false}).then(res => {
        console.log(res);
    });
}); 