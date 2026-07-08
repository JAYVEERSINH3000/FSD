const mg=require('mongoose');
const validator = require('validator');
mg.connect("mongodb://127.0.0.1:27017/mdb4")

const myschema = new mg.Schema({
   coursename:String,
   instructor:String,
   duration:Number,
   fees:Number,
   mode:{type:String,enum:['online','offline']}
})

const mymodel = new mg.model('Courses',myschema)

const c = [{coursename:'MERN',instructor:'ABC',duration:2,fees:20000,mode:'offline'},
   {coursename:'Python',instructor:'XYZ',duration:1,fees:8000,mode:'online'},
   {coursename:'ML',instructor:'PQR',duration:3,fees:25000,mode:'offline'},
   {coursename:'Cloud computer',instructor:'JKL',duration:3,fees:15000,mode:'online'},
   {coursename:'UX/UI Design',instructor:'MNO',duration:5,fees:27000,mode:'offline'}
]
const myfun=async()=>{
   try{
      const result = await mymodel.insertMany(c);
      console.log(result);

      const test = await mymodel.updateOne({coursename:'ABC'},{$set:{duration:4,fees:30000}},{upsert:true});
      console.log(test);

      const test1 = await mymodel.findOne({coursename:"MERN"});
      console.log("id",test1._id);

      const test2 = await mymodel.findByIdAndUpdate(test1._id,{fees:35000,duration:3})
      console.log(test2)

      const test3 = await mymodel.findByIdAndDelete(test1._id);
      if (test3) {console.log("Deleted",test3)}
      else{console.log("No course Found!!!")}

      // 1.Display course having 2nd highest fees
      const test4 = await mymodel.find({},{coursename:1,_id:1}).sort({fees:-1}).limit(1).skip(1);
      console.log(test4);
      // 2.Dispaly courses whose duration is greater than 4 and mode is online but exclude price lessthan 20000
      const test5 = await mymodel.find({$and:[{duration:{$gt:4}},{mode:'offline'}],$nor:[{fees:{$lt:20000}}]});
      console.log(test5);
      // 3.Count total number of online course
      const test6 = await mymodel.countDocuments({mode:'offline'});
      console.log(test6);
      // 4.Increase price by 10% of all courses
      const test7 = await mymodel.updateMany({},{$mul:{fees:1.1}});
      console.log(test7);
      // 5.Decrease duration by 1 month of all courses
      const test8 = await mymodel.updateMany({},{$inc:{duration:-1}});
      console.log(test8);
      // 6.Display course name and fees of the course if duration is lessthan 5 months
      const test9 = await mymodel.find({duration:{$lt:5}},{coursename:1,fees:1,_id:0});
      console.log(test9);
   }
   catch(e){console.log(e)}
}
myfun();