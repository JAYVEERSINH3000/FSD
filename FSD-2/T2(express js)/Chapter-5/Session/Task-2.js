/* 
write a script to meet following requirements:
•	Create session.html file page which contains form(username,password,login button). and open it on localhost.
•	After clicking submit button, it should jump on “save” page. Store username and password in session.
•	After saving session, redirect to “fetchdata” page and read value. On this page check authentication of user. User name and password must be “admin” and “admin@123” respectively. 
o	If this condition is true then display welcome admin and display logout link on this page(fetchdata).
	By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message “Session destroyed”.  And give the link of “login” under that message. By clicking that link user will be redirected to the home page. 
o	Else display “Please enter valid username and password” and login link on this page(fetchdata).
 
*/
var express=require('express');
var app=express();
var session=require('express-session');
app.use(session({secret:'123',name:'login'}));
app.use(express.static(__dirname,{index:'task2.html'}));
app.get("/save",(req,res)=>{
   req.session.un=req.query.un;
   req.session.pw=req.query.pass;
   res.redirect("fetchdata");
});
app.get("/fetchdata",(req,res)=>{
   if(req.session.un==='admin' && req.session.pw==='admin@123'){
      res.send(`<h1 style="color:green">Welcome ${req.session.un}</h1>
         <a href="/destroy">Logout</a>`)
   }
   else{
      res.send(`<h1 style="color:red">Please enter valid username and Pass`)
   }
})
app.get("/destroy",(req,res)=>{
   req.session.destroy();
   res.send(`<h1>Session destroyed</h1>
      <a href="/">Login</a>`);
});
// for destroy cookie also
/* app.get("/destroy",(req,res=>{
   req.session.destroy( (e)=>{
      if(e){ res.send("error")}
      else{ res.cleaeCookie("connect-sid");
         res.send("Destroyed")
      }
   })
})) */
app.listen(7002);