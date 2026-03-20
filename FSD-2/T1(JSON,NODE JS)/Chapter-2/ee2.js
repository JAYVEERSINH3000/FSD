var eventemitter=require("events");
var ee=new eventemitter();
var fs=require("fs");
ee.on("createfolder",()=>{
   if(!fs.existsSync("abc")){fs.mkdirSync("abc");}
   else {console.log("Folder already exists");}
})
ee.on("writefile",()=>{
   fs.writeFileSync("abc/xyz.txt","Hello everyone!");
})
ee.on("appendfile",()=>{
   fs.appendFileSync("abc/xyz.txt","\nHow are you")
})
ee.emit("createfolder");
ee.emit("writefile")
ee.emit("appendfile");