/* Write a reactJS program to perform the tasks as asked below.
•	Create one main file (parent file) name Comp.js and other 3 component files Comp1.js, Comp2.js, Comp3.js. 
•	Pass Number1 and Number 2 from Comp.js file to Comp3.js file. Calculate multiplication of the numbers using useContext.
*/

import { createContext } from "react";
import Comp2 from "./Comp2";
var Num= createContext();
var Obj = {n1:3,n2:8,n3:2}
export default function Comp1(){
   return(
      <>
      <Num.Provider value={Obj}>
               <Comp2/>
      </Num.Provider>
      </>
   )
}
export {Num}