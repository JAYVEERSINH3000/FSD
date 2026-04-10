// Root parameters
var express=require("express");
var app=express();
app.get("/exam/:phase/marks/:fsd2",(req,res)=>{
   res.send(req.params);  // if only want phase than req.params.phase
})
app.listen(7008);
