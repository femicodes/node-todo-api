let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

/* let newTodo = new Todo ({
    text: 'Cook dinner'
});

newTodo.save().then((res) => {
    console.log('Saved todo', res);
}, (e) => {
    console.log('unable to save todo')
});

let nextTodo = new Todo ({
    text: 'Finish node course',
    completed: false,
    completedAt: 10
});

nextTodo.save().then((res) => {
    console.log('saved new todo', res);
}, (e) => {
    console.log('unable to save todo')
}) */

let otherTodo = new Todo({
    text: 'Cook dinner'
});

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (e) => {
    console.log('unable to save todo');
});