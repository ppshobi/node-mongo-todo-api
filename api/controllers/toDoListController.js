'use strict'

var mongoose = require('mongoose'),
Task = mongoose.model('Tasks');

exports.listTasks = function(req , res){
    Task.find({}, function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
};

exports.createTask = function(req, res){
    var task = new Task(req.body);
    task.save(function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
};
