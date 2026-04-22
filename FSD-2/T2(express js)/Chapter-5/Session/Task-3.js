// combination of middleware and session

/* 
Write express js script to perform following tasks.
1.	Create one html file which contains one text field for name, email field and checkbox for subscription. Html file will be loaded on home page. Email and name fields are required fields.
2.	On login page welcome user and email id data should be printed.
a.	If user checked the subscription then “Thank you for the subscription” message will be printed and “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page.
b.	If user has not opted for the subscription then “You can subscribe to get daily updates” message will be printed and “subscribe” link will be displayed under the message.
c.	If user clicks subscribe link then he/she will be redirected to the subscription page. In this page “Thank you for the subscription” message will be printed and “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page.
         Use concept of the middleware and you can use any of http methods(get/post).

*/
var express=require('express');
var app=express();
var session=require('express-session');
app.use(session({secret:'123',name:'login'}));
app.use(express.static(__dirname,{index:'task3.html'}));
var datamw=(req,res,next)=>{
   res.write(`<h1>Welcome ${req.body.un}</h1>
      <h2>Email is ${req.body.email}</h2>`);
      next();
}
app.post("/login",datamw,(req,res)=>{
   if(req.body.un==='on'){
      res.write(`<h1>Thank you!!!</h1>
         <a herf="/">Logout</a>`);
   }
   else{
      
   }
})