function Map(){
   var students=[ { id:1, name:"Jayveer", std:11},
                  { id:2, name:"Pasu", std:1},
                  { id:3, name:"Yatharth", std:11},
                  { id:4, name:"Jadu", std:11},
                  { id:5, name:"Vedant", std:9} 
   ]
   return(
      <>
      {students.filter( (s)=>s.std===11 ).map( (s)=>{   
         return(<div key={s.id}>
            <h2>Student Name : {s.name.toUpperCase()} </h2>
            <h3>Standard : {s.std+1}</h3>
         </div>)
         
      } ) }
      </>
   )
}
export default Map;