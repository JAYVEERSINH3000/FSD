// asynchronous file system module
var fs=require("fs")
fs.mkdir("afs",(e)=>{
   if(e) throw e;
   console.log("Folder created");
});
fs.writeFile("afs/test.txt","Hellooo!!!",(e)=>{
   if(e) {console.log(e);}
   else {console.log("Data written");}
})
fs.appendFile("afs/test.txt","How are you?",(e)=>{
   if(e) {console.log(e);}
   else{console.log("Data appended");}
})
fs.readFile("afs/test.txt","utf-8",(e,d)=>{
   if(e) {throw e;}
   else {console.log(d)}
})
fs.copyFile("afs/test.txt","temp.txt",(e)=>{
   if(e) {throw e;}
   else {console.log("Data copied")}
})
fs.rename("afs/test.txt","afs/my.txt",(e)=>{
   if(e) {throw e;}
   else {console.log("Donee")}
})
fs.unlink("afs/my.txt",(e)=>{
   if(e) {throw e;}
   else {console.log("Deleted!!!")}
})
fs.rmdir("afs",(e)=>{
   if(e) {console.log(e)}
   else {console.log("Directory removed!")}
})