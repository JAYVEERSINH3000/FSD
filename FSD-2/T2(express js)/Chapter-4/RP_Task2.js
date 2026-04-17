// form using get method
var express=require("express");
var app=express();
app.get("/",(req,res)=>{
   res.send(`<form action="/data" method="get">
      Username:<input type="text" name="un"> <br><br>
      Password:<input type="password" name="pass"> <br><br>
      <input type="submit"></form>`);
});
app.get("/data",(req,res)=>{
   console.log(req.query);
   res.send(`<h1>Welcome ${req.query.un}</h1>
      <h2>Your password is ${req.query.pass}</h2>`);
});
app.listen(6001);
// localhost:6001