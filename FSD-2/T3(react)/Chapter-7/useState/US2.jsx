import {useState} from "react";
function US2(){
   const [count,setcount]=useState(20)
   function inc(){
      if(count<50){
      setcount(count+1) }
   }
   function dec(){
      if(count>0){
      setcount(count-1)}
   }
   return(
      <>
      <h1>{count}</h1>
      <button onClick={inc} >Increment</button>
      <button onClick={dec} >Decrement</button>
      </>
   )
}
export default US2;