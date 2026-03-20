var p=require("path");
var fs=require("fs");
var mypath="LJ/first.txt";
var dir=p.dirname(mypath);
var base=p.basename(mypath);
// fs.mkdir(dir,(e)=>{
//    if(e) throw e;
//    else console.log("Created");
// })
var new_path=dir+"/"+base;
fs.watchFile(new_path,"Hello",(e)=>{
   if(e) throw e;
   else console.log("Written");
})
fs.copyFile(new_path,dir+"/second.txt",(e)=>{
   if(e) throw e;
   else console.log("Copied")
})
