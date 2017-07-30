'use strict'

module.exports = function(app){
    var toDoList = require('../controllers/toDoListController');

    app.route('/tasks')
        .get(toDoList.listTasks)
        .post(toDoList.createTask);

    app.route('tasks/:taskId')
        .get(toDoList.listTask)
        .put(toDoList.updateTask)
        .delete(toDoList.deleteTask)
};