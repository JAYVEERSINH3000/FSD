/*  Use multiple contexts in a React application 
   by creating and consuming them across different components. 
Comp1.js: Creates a context for CSS styling and provides it to Comp2.
Comp2.js: Creates a context for a string value ("Students") and provides it to Comp3.
Comp3.js: Consumes both contexts and displays a message with the provided styles and string.
*/

import { createContext } from "react";
import Comp2 from "./Comp2";
var l = [{name:"Jayveer",marks:24,id:1},
   {name:"Dhairya",marks:10,id:2} ]
var Data=createContext();
export default function Comp11(){
   return(
      <>
      <Data.Provider value={l}>
         <Comp2/>
      </Data.Provider>
      </>
   )
}
export {Data};    