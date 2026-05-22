function Child(props){
   return(
      <h1 style={{backgroundColor:'yellow',color:'red'}}>
         Welcome {props.data.name} to {props.data.clg}
      </h1>
   )
}
export default Child;