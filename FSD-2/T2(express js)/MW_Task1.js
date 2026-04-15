var express=require("express");
var app=express();
app.use(express.urlencoded()) // need for url decode
app.get("/login",(req,res)=>{
   res.send(`<form action="/data" method="post">
      URL:<input type="url"> <br><br>
      PASS:<input type="password" name="pass"> <br><br>
      CONFROM PASS:<input type="password" name="cpass"> <br><br>
      SUBMIT:<input type="submit"></form>`);
})
var checkpass=(req,res,next)=>{
   if(req.body.pass===req.body.cpass){
      console.log("matched");
      next();
   }
   else{
      res.send("Not valid password")
   }
}
app.post("/data",checkpass,(req,res)=>{
   res.send(`<h1> Welcome ${req.body.un} </h1>`)
});
app.listen(5500);