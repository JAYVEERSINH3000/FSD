const expr = require('express')
const app = expr()
const mg = require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/mdb4')

const myschema = new mg.Schema({username:String,password:String})

//                  mg.model(collection name,schema)
const mymodel = new mg.model("mydata",myschema);

app.use(expr.static(__dirname,{index:"task.html"}));

app.get("/submit",async(req,res)=>{
   const data = new mymodel({username:req.query.uname,password:req.query.pass})
   await data.save();
   res.send('Thank You!');
})
app.listen(8001);

