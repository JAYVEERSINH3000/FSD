// json proccesing
var express=require("express");
var app=express();
student={'name':'jayveer','age':19}
app.get("/j1",(req,res)=>{
   res.write(student.age+" ");  // always pass string 
   res.send()
})
app.listen(3333);