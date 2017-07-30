var express = require('express'),
    app = express(),
    port = process.env.port || 3000;

app.listen(port)

console.log("ToDo List Api Server Started on Port " + port);