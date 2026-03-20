var url=require("url");
var addr="https://video.google.com:8080/about?id=20&year=2024#Students"
var up=url.parse(addr,true);  // default value id false
console.log(up);
process.noDeprecation=true
var year=up.query.year
if (year%4==0){
   console.log(`${year} is leap year`);
}
else{
   console.log(`${year} is not a leap year`);
}