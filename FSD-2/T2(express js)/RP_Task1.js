var express=require("express");
var app=express();
app.get("/user/:uid",(req,res)=>{
   console.log(req.params);
   console.log(req.query);
   res.write(`<h1>Werlcome ${req.query.name}</h1>
      <h2>Your id is ${req.params.uid}</h2>`);
      if (parseInt(req.query.age) < 18){
         res.write("You are minor");
      } 
      else{
         res.write("You are an adult");
      }
   res.send()
})
app.listen(3232);
// http://localhost:3232/user/101?name=Jayveer&age=20