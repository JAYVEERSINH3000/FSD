// http module
// req=request,res=response
var http=require("http");
http.createServer((req,res)=>{
   res.writeHead(200,{"Content-Type":"text/html"}); 
   // if we write plain at text/plain that it will gives normal string :<h3>HTTP Module Example</h3>
   // if we write anything at text (eg.test) then when we run than file will be automatically download 
   res.write("<h3>HTTP Module Example</h3>");
   res.end();  // we can also write anything in end
}).listen(3006,()=>{console.log("Server Started http://localhost:3006");})   // above 3000 and below 9999
