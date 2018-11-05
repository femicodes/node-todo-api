let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
let {ObjectID} = require('mongodb');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, e => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send();
        }

        res.send({todo});

    }).catch(err => {
        res.status(400).send();
    })
});

app.listen(9000, () => {
    console.log('Started on port 9000');
});

module.exports = {app};


/* let nextTodo = new Todo ({
    text: 'Finish node course',
    completed: false,
    completedAt: 10
});

nextTodo.save().then((res) => {
    console.log('saved new todo', res);
}, (e) => {
    console.log('unable to save todo')
}) */