// Write a Node.js program using fs synchronous methods to read a file, 
// count the number of vowels in its content, 
// and append the vowel count to the same file.
var fs=require("fs")
fs.writeFileSync("task3/content.txt","Hello! B4 Students\nWelcome to Node JS Tutorial");
var d=fs.readFileSync("task3/content.txt","utf-8");
var i=0;
var v="aeiouAEIOU";
for (let a=0;a<d.length;a++){
   if(v.includes(d[a])){
      i++;
   }
}
fs.appendFileSync("task3/content.txt","\nVowels are "+i);

