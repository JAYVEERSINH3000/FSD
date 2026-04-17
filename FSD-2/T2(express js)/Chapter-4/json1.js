// json proccesing
var express=require("express");
var app=express();
student={'name':'jayveer','age':19}
app.get("/j1",(req,res)=>{
   res.send(student);
})
app.get("/j2",(req,res)=>{
   res.json(student);
})
app.get("/j3",(req,res)=>{
   res.write(JSON.stringify(student)); // (The "chunk" argument must be of type string) error will accure 
   // we need to stringify obj for res.write()
   res.send();
})
app.listen(3333);