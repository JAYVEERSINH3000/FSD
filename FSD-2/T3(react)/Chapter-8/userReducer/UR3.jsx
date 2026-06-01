import img1 from "./assets/air.jfif"
import img2 from "./assets/railway.jfif"
import {useReducer} from "react";
function reducer(state,action){
   if(action.type='ci'){
   if (state === img1) return img2
   else return img1;}
   return state;   
}
function UR3(){
   const [state,dispatch] = useReducer(reducer,img1);
   return(
      <>
      <img src={state} width='400' height='400' />
      <button onClick={()=>dispatch({type:'ci'})} >Change Image</button>
      </>
   )
}
export default UR3;