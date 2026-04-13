var express=require("express");
var app=express();
app.use(express.urlencoded());  
app.get("/",(req,res)=>{
   res.send(`<form action="/data" method="post">    
      Number 1:<input type="number" name="n1"> <br><br>
      Number 2:<input type="number" name="n2"> <br><br>
      Select method:<select name="add">
      <option id="a1">Addition</option>
      <option id="b2">Subtraction</option>
      </select> <br><br>
      <input type="submit"></form>`);
});
app.post("/data",(req,res)=>{
   console.log(req.body);
   console.log(req.body.add.a)
   console.log(`Addition of ${req.body.n1} and ${req.body.n2} is `);
   
   res.send()
});
app.listen(6004);
