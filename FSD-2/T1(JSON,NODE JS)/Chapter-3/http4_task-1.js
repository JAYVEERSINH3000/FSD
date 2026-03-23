var http=require("http");
http.createServer((req,res)=>{
   res.writeHead(200,{"Content-Type":"text/html"});
   if(req.url==="/"){
      res.end(`<h1 style="font-size:45px;text-align:center;color:red;">Welcome to my website</h1>
         <a href="/about">About</a>
         <a href="/contact">Contact</a>`);
   }
   else if(req.url==="/about"){res.end("<h2>About part</h2>");}
   else if(req.url==="/contact"){res.end("<h2>Contact part</h2>");}
   else {res.end("Page not found");}
}).listen(7006)