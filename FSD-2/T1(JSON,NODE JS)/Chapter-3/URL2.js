var fs=require("fs")
var url=require("url");
var addr="https://video.google.com:8080/about?t1=20&t2=22&t3=18#Students"
var up=url.parse(addr,true); 
console.log(up);
fs.writeFileSync("marks.txt",`T1:${up.query.t1}
T2:${up.query.t2}
T3:${up.query.t3}`);
var avg=(up.query.t1+up.query.t2+up.query.t3)/3
fs.appendFileSync("marks.txt",`\nAverage marks ${avg}`) 