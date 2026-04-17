var express=require("express");
var app=express();
app.use(express.static(__dirname,{index:'calc_html.html'}));
app.get("/Calc",(req,res,next)=>{
   if(req.query.n1<0){
      res.send("Please enter number greater than 0");
   }
   else{
      next();
   }
},(req,res)=>{
   if(req.query.Operation==="square"){
      res.send(`Square is ${req.query.n1*req.query.n1}`)
   }
   else if(req.query.Operation==="cube"){
      res.send(`Square is ${req.query.n1*req.query.n1*req.query.n1}`)
   }
   else{
      res.send("Please select valid operation")
   }
});
app.listen(7707);