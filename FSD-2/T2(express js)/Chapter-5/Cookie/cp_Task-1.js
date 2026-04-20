var express=require("express");
var app=express();
var cp=require("cookie-parser");
app.use(cp());
app.use(express.urlencoded());  // bcz post method
app.use(express.static(__dirname,{index:"task1.html"}));
app.post("/next",(req,res)=>{
   res.cookie("Firstname",req.body.fn);
   res.cookie("Lastname",req.body.ln);
   res.cookie("Password",req.body.pass);
   res.redirect("/admin");
});
app.get("/admin",(req,res)=>{
   res.clearCookie("Lastname");
   //At first 'lastname' will display than we refresh the page it will become undefined
   res.send(`<h1>Welcome
      ${req.cookies.Firstname}
      ${req.cookies.Lastname}  </h1>
      <h2> Password is : ${req.cookies.Password} </h2>`)
});
app.listen(7009);
