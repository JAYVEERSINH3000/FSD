// Write var data={d:{a:10,b:20,c:[30,20]}} to calc.txt file
// Read file and calculate the below operations : 
// 1.Addition of a and b
// 2.Subtract seconf element of c and b
// 3.Multiplication of both ele of c
// Also append this to calc.txt
var fs=require("fs")
fs.writeFileSync("task4/calc.txt","var data={d:{a:10,b:20,c:[30,20]}}");
var d=fs.readFileSync("task4/calc.txt","utf-8");
