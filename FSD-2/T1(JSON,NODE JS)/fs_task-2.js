var fs=require("fs")
fs.writeFile("task/source.txt","LJ University",(e)=>{
   if(e) {console.log(e);}
   else {
      fs.writeFile("task/desti.txt","Hi",(e)=>{
         if(e) {console.log(e);}
         else {
            fs.readFile("task/source.txt","utf-8",(e,d)=>{
            if(e) {throw e;}
            else {
               fs.appendFile("task/desti.txt",d,(e1)=>{
               if(e1) {console.log(e1);}
               else{
                  fs.unlink("source.txt",(e)=>{
                     if(e) {throw e;}
                     else {
                        fs.readFile("desti.txt","utf-8",(e,d)=>{
                        if(e) {throw e;}
                        else 
                        {
                           console.log(d)};
                  })}
               })}
            })
         }
      })
   }

})
   }})