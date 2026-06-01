import C2 from "./C2.jsx"
import {createContext} from 'react';
const Fn=createContext('Jayveer');  // default value
function C1(){
   return(
      <>
      <Fn.Provider value={'ABC'}>
         <C2 />
      </Fn.Provider>
      </>
   )
}
export default C1;
export {Fn};