import { createContext } from "react";
import UC2 from "./UC2";
var Fname = createContext();
var Lname = createContext();
export default function UC1(){
   return(
      <>
      <Fname.Provider value="Jayveer">
         <Lname.Provider value="Parmar">
            <UC2 />
         </Lname.Provider>
      </Fname.Provider>
      </>
   )
}
export {Fname,Lname};     // { ... } : name export 
// Our main file so import this file to myApp.jsx