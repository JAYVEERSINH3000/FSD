import { useContext } from "react";
import {Fname,Lname} from "./UC1";

export default function UC3(){
   const fn = useContext(Fname);
   const ln = useContext(Lname);
   return(
      <>
      <h2>Welcome {fn} {ln}</h2>
      </>
   )
}