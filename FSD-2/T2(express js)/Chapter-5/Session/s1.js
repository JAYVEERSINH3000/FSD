var express=require("express");
var app=express();
var session=require('express-session');
app.use(session({
   secret:'Jayveer1',
   resave:false,
   saveUninitialized:false,
   cookie:{maxAge:10000}}
));  // secret is compulsary
app.get('/',(req,res)=>{
   if(req.session.page_views){  // this can not pre-define
      req.session.page_views++;
      res.send(`<h1>You have visited ${req.session.page_views}</h1>`);
   }
   else{
      req.session.page_views=1;
      res.send(`<h1 srtle="color:purple">Welcome to my website<h1>`);
   }
});
app.listen(7001);