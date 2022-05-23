// jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello, world</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: shihhao@gmail.com");
});

app.get("/about", function(req, res){
    res.send("<h2>I'm Shih Hao</h2>");
})

app.get("/hobbies", function(req, res){
    res.send("<ul><li>movies</li><li>code</li><li>porn video</li></ul>");
});

app.listen(5000, function(){
    console.log("Server started on port 5000");
});