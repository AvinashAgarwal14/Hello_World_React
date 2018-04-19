var express = require("express");
var app =express();
var engines = require("consolidate");

app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get("/",function(req,res){
	res.render("landing");
});

app.listen(3000,function(req,res){
	console.log("Server Started at Port 3000");
});