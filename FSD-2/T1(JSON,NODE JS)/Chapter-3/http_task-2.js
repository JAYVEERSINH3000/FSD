var fs=require("fs");
var url=require("url");
var http=require("http");
var addr="http://localhost:5001/my.html";
var u=url.parse(addr);
http.createServer((req,res)=>{
   fs.readFile("."+u.pathname,(e,d)=>{
      if (e){res.writeHead(404,{"Content-Type":"text/plain"});
         res.end("File not found");}
      else{
         res.writeHead(200,{"Content-Type":"text/html"});
         res.end(d);
      }
   })
}).listen(5001)