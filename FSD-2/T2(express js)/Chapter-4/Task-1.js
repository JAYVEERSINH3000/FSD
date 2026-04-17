var express=require("express");
var app=express();
data=[{'name':"Jayveer",'age':20},
      {'name':'pasu','age':19},
      {'name':'jadu','age':33}];

app.get("/",(req,res)=>{
   res.send(data);
})
app.get("/sort",(req,res)=>{
   var temp=data.sort((a,b)=>b.age-a.age)
   res.type("text/html");
   res.write(`<table border='2'><tr><th>Name</th>
      <th>Age</th></tr>`);
      for (t of temp){
         res.write(`<tr><td> ${t.name} </td><td>${t.age}</td></tr>`);
      }
   res.write(`</table>`);
   res.send();
})
app.listen(7070);