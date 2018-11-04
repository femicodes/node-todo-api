// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

//MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   // if (err) {
    //    return console.log('Unable to connect to MongoDB server');
  //  }
   // console.log('Connected to MongoDB server');

 //   db.collection('Todos').find().toArray().then((docs) => {
 //       console.log('Todos');
 //       console.log(JSON.stringify(docs, undefined, 2));
 //   }, (err) => {
  //      console.log('unable to fetch todo', err)
 //   }); 

    /* db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

   // db.close();
//});

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    

    db.collection('TodoList').insertOne({
        text: 'Watch a movie',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
}); 