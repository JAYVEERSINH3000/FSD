import {useReducer} from "react";
function reducer(state,action){
   if (action.type === 'inc') {
      if(state<80) return state+1 
      else return state}
   else if (action.type === 'dec') {
      if(state>0) return state-1 
      else return state}
   else return state ;   
}
function UR2(){
   const [state,dispatch] =useReducer(reducer,30); 
   return(
      <>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:'inc'})}>Inc</button> 
      <button onClick={()=>dispatch({type:'dec'})}>Dec</button>
      </>
   )
}
export default UR2;