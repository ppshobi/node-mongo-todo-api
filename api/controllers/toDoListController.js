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

exports.listTask = function(req, res){
    Task.findById(req.params.taskId, function(err, task){
        if(err){
            res.send(err);
        }

        res.json(task);
    });
};

exports.updateTask = function(req, res){
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new:true}, function(err, task){
        if(err){
            res.send(err)
        }

        res.json(task);
    });
};

exports.deleteTask = function(req, res){
    Task.remove({_id:req.params.taskId}, function(err, task){
        if(err){
            res.send(err);
        }

        res.json({
            message: 'Task Successfully Deleted'
        })
    });
};
