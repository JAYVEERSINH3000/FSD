var express=require("express");
var app=express();
var cp=require("cookie-parser");
app.use(cp());
app.get("/",(req,res)=>{
   res.cookie("Fname","Jayveer");
   res.cookie("Lname","Parmar");
   res.cookie("Subject","FSD2",{maxAge:5000}); // this subject cookie is only for 5 sec
   res.clearCookie("Lname"); // for remove cookie
   res.send(req.cookies);
})
app.listen(7700);