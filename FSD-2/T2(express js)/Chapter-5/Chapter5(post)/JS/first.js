// Using post method :- 
var path=require("path");
var express=require("express");
var app=express();
var hp=path.join(__dirname,"../HTML");
var cp=path.join(__dirname,"../CSS");
var ip=path.join(__dirname,"../image");
app.use(express.static(cp));
app.use(express.static(hp,{index:"my.html"}));
app.use(express.static(ip));

app.use(express.urlencoded());
app.post("/data",(req,res)=>{
   res.type("text/html");
   res.write(`<h2>Welcome ${req.body.uname}</h2>
      <h4>Your maessage is : ${req.body.msg}</h4>`);
   var m=(req.body.msg).split(".");
   for(i in m){
      res.write(m[i]+"<br>");
   }
   res.write(`Click link to check number of vowels : 
      <a href="/message?m=${req.body.msg}">Count</a>`);
   
});
app.get("/message",(req,res)=>{
   var msg=req.query.m;
   let c=0;
   for (m of msg.toLowerCase()){
      if("aeiou".includes(m)){
         c++;
      }
   }
   res.send(`Vowels are : ${c}`)
})
app.listen(7070);