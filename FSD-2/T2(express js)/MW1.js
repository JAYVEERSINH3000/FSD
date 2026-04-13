// Middleware
var express=require("express");
var app=express();
var name=(req,res,next)=>{  // next is mw fun
   req.name="Test";
   console.log("Name middleware");
   next();
}
var age=(req,res,next)=>{
   var age=20;
   console.log("Age middleware");
   next();
}
app.use("/",name);
app.use("/page",age);
app.get("/",(req,res)=>{
   res.send("Home page");
});
app.get("/page/about",(req,res)=>{
   res.send("About page" );
});
app.listen(5009);