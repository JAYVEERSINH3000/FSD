import img4 from "../assets/no.jfif";
function Nopage(){
   return(
      <>
      <h1 style={ {color:'red',fontSize:'50px'} }>No page Found !!!</h1>
      <img src={img4} width='500' alt="Home" />
      </>
   )
}
export default Nopage;