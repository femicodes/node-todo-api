
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    /* db.collection('Todos').find({
        _id: new ObjectID('5bb83868e0f65e1df487eef6')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todo', err)
    }); */

   db.collection('TodoList').find().toArray().then((docs) => {
        console.log('TodoList');
        console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
       console.log('Unable to fetch todos', err)
   });
});