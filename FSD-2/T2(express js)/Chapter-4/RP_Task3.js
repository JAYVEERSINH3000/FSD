// form using post method
var express=require("express");
var app=express();
app.use(express.urlencoded());  // must use this middleware function
app.get("/",(req,res)=>{
   // method="post"  in form
   res.send(`<form action="/data" method="post">    
      Username:<input type="text" name="un"> <br><br>
      Password:<input type="password" name="pass"> <br><br>
      <input type="submit"></form>`);
});
app.post("/data",(req,res)=>{
   console.log(req.body);
   res.send(`<h1>Welcome ${req.body.un}</h1>
      <h2>Your password is ${req.body.pass}</h2>`);
});
app.listen(6002);
// localhost:6002

/*
express.urlencoded({extended:true(nested query) or false(querystring)} )
true {x:y:{z:[10,20,30]}}
false {x:[10,20,39]}
*/