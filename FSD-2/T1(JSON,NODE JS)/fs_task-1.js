var fs=require("fs");
fs.writeFileSync("b4.txt","Hi");
console.log("Sync task completed"); // 1 (execution flow)
fs.writeFile("b5.txt","Hi",(e)=>{
   if(e) {console.log(e);}
   else{ console.log("Async task completed") } // 3
})
console.log("Last execution") // 2