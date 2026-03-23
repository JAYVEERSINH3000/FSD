var http=require("http");
var fs=require("fs")
http.createServer((req,res)=>{
   if(req.url==="/"){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.write(`<h1>Welcome to LJ University</h1>
         <img src="p1.png" width="300" height="300"/>`);
      res.end(`<a href="/p1.png" target="_blank">Image</a>`);
   }
   else if(req.url==="/p1.png") {
      const i=fs.readFileSync("p1.png");
      res.writeHead(200,{"Content-Type":"image/png"});
      res.end(i);
   }
   else{
      res.writeHead(404,{"Content-Type":"text/html"});
      res.end(`<h2>Sorry,Page not found </h2>
         <a href="http://localhost:5009">Click Here</a>`);
   }
}).listen(5009)