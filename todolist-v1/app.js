// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var todoItems = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
    
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("zh-TW", options);
    
    res.render("list", {
        kindOfDay: day,
        newListItems: todoItems
    });
});
app.post("/", function(req, res){
    var todoItem = req.body.newItem;

    todoItems.push(todoItem);
    
    res.redirect("/");
})

app.listen(5000, function(){
    console.log("Server started on port 5000");
})