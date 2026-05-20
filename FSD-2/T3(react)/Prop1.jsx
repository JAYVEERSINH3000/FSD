import Prop2 from "./Prop2.jsx"
function Prop1(){
   var n='Jayveer';
   return(
      <>
      <Prop2 name="Pasu" age="19"/>  {/* age as a string */}
      <Prop2 name={n} age={20} />    {/* age as a number */}
      </>
   )
}
export default Prop1;