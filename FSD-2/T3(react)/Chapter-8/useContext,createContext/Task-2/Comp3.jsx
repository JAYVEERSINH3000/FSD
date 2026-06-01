import { useContext } from "react";
import {Data} from "./Comp1";
import {C} from "./Comp2"
function Comp3(){
   var d=useContext(Data);
   var mycss=useContext(C);
   return(
      <>
      <h1 style={ mycss }>Student Data</h1>
      <table border="5px">
         <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Marks</th>
         </tr>
         <tr>
            <td>{d[0].id}</td>
            <td>{d[0].name}</td>
            <td>{d[0].marks}</td>
         </tr>
         <tr>
            <td>{d[1].id}</td>
            <td>{d[1].name}</td>
            <td>{d[1].marks}</td>
         </tr>
      </table>
      </>
   )
}
export default Comp3;