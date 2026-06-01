import {useContext} from 'react';
import {Fn} from "./C1";
function C3(){
   var f1=useContext(Fn);
   return(
      <h1>Welcome {f1}</h1>
   )
}
export default C3;
