var eventemitter=require("events");
var ee=new eventemitter();
ee.on("circle",(r)=>{
   if (r<0){console.log("Radius must be positive");}
   else{ var area=Math.PI*(r*r);
      console.log(`Area of circle is ${area}`);
   }
})
ee.on("square",(s)=>{
   if (s<0){console.log("Side must be positive");}
   else{ var area=s*s;
      console.log(`Area of square is ${area}`);
   }
})
ee.emit("circle",10);
ee.emit("square",2);