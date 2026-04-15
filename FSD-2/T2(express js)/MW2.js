var express=require("express");
var app=express();
var entrylog=(req,res,next)=>{
   console.log("Student entered");
   next();
}
var checkid=(req,res,next)=>{
   var hasid=true;
   if(hasid){
      req.name="Jayveer";
      console.log("Verified student");
      next();
   }
   else{
      console.log("Not verified");
      res.send("No id available");
   }
}
app.use("/student",entrylog,checkid);
app.get("/student",(req,res)=>{
   res.send(`Welcome ${req.name}`);
});
// or 
/* app.get("/student",entrylog,checkid,(req,res)=>{
      res.send(`Welcome ${req.name}`)
})*/
app.listen(3045);  //localhost:3045/student