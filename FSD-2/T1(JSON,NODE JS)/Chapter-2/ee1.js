// eventemitter
// if emit is on the 'on' method then it will givens nothing
var eventemitter=require("events");
var ee=new eventemitter();
ee.on("first",()=>{console.log("First task");}) //1
var add=(a,b)=>{console.log(`Addition is ${a+b}`);} //3
ee.on("second",add);
ee.on("second",()=>{console.log("Completed");}) //4
ee.on("first",()=>{console.log("First task completed");}) //2
ee.emit("first"); //trigger event
ee.emit("second",3,6);

