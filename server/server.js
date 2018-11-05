let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

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