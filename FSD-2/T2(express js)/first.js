var express=require("express");
var app=express();
// app.get(path,callback)
//    .post
//    .put
//    .delete

/*app.get("/",(req,res)=>{})
app.get("/about",(req,res)=>{})
app.listen(3005,localhost,100,()=>{console.log("Server started")}); 
        (portnumber,domain name,backlog,for notify something) */

/*app.get("/",(req,res)=>{
   //res.set("content-type","text/html");  // we have 3 options set,type,setHeader
   res.type("text/html");
   //res.setHeader("Content-Type","text/html");
   res.write("<h3>Hello Jayveer</h3>");
   res.send();
})  */

/* app.get("/about",(req,res)=>{
    //res.write("<h4>Express Js</h4>");
    res.send("<h2>End communication after sending</h2>");  // o/p : html type
    // after writing data in write() --> send() must be empy
 }) */

app.get("/about",(req,res)=>{
   res.write("<h4>Express Js</h4>");  // o/p : plain text
   //res.send("<h2>End communication after sending</h2>");  
   // after writing data in write() --> send() must be empy
   res.send();
})
app.listen(5007);