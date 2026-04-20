var express=require("express");
var app=express();
var cp=require("cookie-parser");
app.use(cp());
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"task2.html"}));
app.post("/submit",(req,res)=>{
   var{un,email,msg,rate}=req.body;
   var feedback={un,email,msg,rate}
   res.cookie("feedback",feedback,{maxAge:10000});
   res.send(`<h1>Thank you!</h1>
      <a href='/details' >View Feedback </a>`)
});   
app.get("/details",(req,res)=>{
   var fb=req.cookies.feedback;
   if(fb){
      res.send(`<h1>Hello! ${fb.un}</h1>
         <h2>Your Message :${fb.msg}
         <h2>Your Email :${fb.email}
         <h2>Your Rating :${fb.rate}
         <a href="/" >Log out</a>`)
   }
   else{
      res.send(`No feedback available <a href="/" >Logout</a>`);
   }
});
app.listen(5656);
