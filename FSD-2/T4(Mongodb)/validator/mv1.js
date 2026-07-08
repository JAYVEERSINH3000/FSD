const mg=require('mongoose');
const validator = require('validator');
mg.connect("mongodb://127.0.0.1:27017/mdb4")

const myschema = new mg.Schema({
   product:{type:String,required:true,uppercase:true,maxlength:[8,"max length is 8"],minlength:5,
      validate:[validator.isAlphanumeric,"Enter valid name"]},
   email:{type:String,unique:true,validate:[validator.isEmail,"No valid"]},
   qty:{type:Number,max:5,min:1},
   role:{type:String,enum:['seller','buyer'],default:'seller'}
})

const mymodel = new mg.model('products',myschema)

const myfun=async()=>{
   try{
      const data = new mymodel({product:'test12',email:'abc@gmail.com',qty:2,role:'buyer'})
      const result = await data.save()
      console.log(result);
   }
   catch(e){console.log(e)}
}
myfun();