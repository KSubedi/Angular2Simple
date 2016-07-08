/*
Simple static file server that will send index.html if the file is not found. Useful for developing angular apps.
*/ 

var express = require("express");
var app = express();

app.use(express.static("dist"));

app.use((req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(3000, function () {
  console.log('Angular App Is Running!');
  console.log('Open http://localhost:3000/ on your browser!');
});