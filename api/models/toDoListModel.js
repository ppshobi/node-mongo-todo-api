'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var TaskSchema = new schema({
    name : {
        type : String,
        Required : "Kindly enter a name for your task"
    },

    created_data :{
        type : Date,
        default : Date.now
    },

    status : {
        type : [{
            type : String,
            enum : ['pending', 'ongoing', 'completed']
        }],
        default : ['pending'] 
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);