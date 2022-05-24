// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The resuslt of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
    
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("The BMI reslut is " + bmi);
})

app.listen(5000, function(){
    console.log("surver is running on port 5000.");
});