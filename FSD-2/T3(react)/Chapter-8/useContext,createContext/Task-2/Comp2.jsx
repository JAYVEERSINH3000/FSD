import { createContext } from "react";
import Comp3 from "./Comp3";
const css={color:'purple',fontSize:'50px',textDecoration:'underline'}
const C =createContext(css);
export default function Comp2(){
   return(
      <>
      <Comp3 />
      </>
   )
}
export {C};