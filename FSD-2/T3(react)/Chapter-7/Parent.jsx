import Child from "./Child.jsx";
function Parent(){
   var obj={name:'Jayveer',clg:"LJ University"};
   return (
      <>
      <Child data={obj} />
      </>
   )
}
export default Parent