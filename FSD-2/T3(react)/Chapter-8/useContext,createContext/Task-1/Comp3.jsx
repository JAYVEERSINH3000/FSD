import { useContext } from "react";
import {Num} from "./Comp1";
function Comp3(){
   var n=useContext(Num);
   return(
      <>
      <h1 style={ {color:'red',textDecoration:'underline'} }>
         Output : {n.n1*n.n2/n.n3}
      </h1>
      </>
   )
}
export default Comp3;