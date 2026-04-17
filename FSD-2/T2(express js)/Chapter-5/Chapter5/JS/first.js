var path=require("path");
var express=require("express");
var app=express();
var hp=path.join(__dirname,"../HTML");
var cp=path.join(__dirname,"../CSS");
var ip=path.join(__dirname,"../image");
app.use(express.static(cp));
app.use(express.static(hp,{index:"my.html"})); // if file name is index.html than no need to write {index:""}
app.use(express.static(ip));
app.listen(7001)