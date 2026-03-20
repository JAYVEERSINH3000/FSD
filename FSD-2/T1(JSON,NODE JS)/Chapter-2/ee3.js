// remove listner,remove all listner
var eventemitter=require("events");
var ee=new eventemitter();
var fun1=(x)=>{console.log(`Message from fun1 is ${x}`);}
var fun2=(x)=>{console.log(`Message from fun2 is ${x}`);}
ee.on("event1",fun1); //1
ee.on("event2",fun2); //3
ee.on("event1",fun2); //2
ee.on("event2",fun1); //4
var c=ee.listenerCount("event1");
console.log(`Count is ${c}`); // Count is 2
ee.emit("event1","B4 Students");
ee.emit("event2","FSD-2");
ee.removeListener("event1",fun2);    //removes event1 which has fun2
ee.removeAllListeners("event2");
var c1=ee.listenerCount("event2")
console.log("count of event2 :"+c1) //count of event2 :0