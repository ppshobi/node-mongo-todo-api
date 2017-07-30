var express = require('express'),
    app = express(),
    port = process.env.port || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/toDoListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ToDoDb');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var routes = require('./api/routes/toDoListRoutes');

routes(app);

app.listen(port)


console.log("ToDo List Api Server Started on Port " + port);