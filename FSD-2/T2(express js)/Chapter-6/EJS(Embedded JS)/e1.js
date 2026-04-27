var express=require("express");
var app=express();
var path=require("path")
app.set("view engine",'ejs');  // create 'views' folder
app.set("views",path.join(__dirname))
app.get("/",(req,res)=>{
   res.render("e1");
})
app.listen(7011);