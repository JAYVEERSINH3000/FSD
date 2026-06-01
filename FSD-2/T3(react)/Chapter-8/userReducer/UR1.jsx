/* const [state,dispatch] = useReducer(reducerfunction,initial value)
function reducer(state,action){
   if(action.type === "  "){}
}  */

import {useReducer} from "react";
function reducer(state,action){
   return state + action ;   // here addition is accure
}
function UR1(){
   const [state,dispatch] =useReducer(reducer,50); // 50 is state
   return(
      <>
      <h1>{state}</h1>
      <button onClick={()=>dispatch(2)}>Add</button>   {/* 2 is action */}
      </>
   )
}
export default UR1;