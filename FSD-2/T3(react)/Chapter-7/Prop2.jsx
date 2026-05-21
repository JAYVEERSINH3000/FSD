function Prop2(props){
   return(
      <div>
         <h1 style={{color:'red',textDecoration:"underline"}}>{props.name}</h1>
         <h2>{props.age+1}</h2>
      </div>
   )
}
export default Prop2;