// Path module
var p=require("path");
var addr="D:/LJ/node/my.html";

var dir=p.dirname(addr);  // D:/LJ/node
var base=p.basename(addr); // my.html
var ext=p.extname(addr);  // .html
console.log(`Directory : ${dir}  
Basename : ${base}
Extension : ${ext}`);
var ps=p.parse(addr);  // second way for dir,base,ext
console.log(ps)  
/*    ps o/p :  
{  
  root: 'D:/',
  dir: 'D:/LJ/node',
  base: 'my.html',
  ext: '.html',
  name: 'my'
} */