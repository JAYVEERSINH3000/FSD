import img2 from "../assets/aboutimg.jfif";
function About(){
   return(
      <>
      <h1 style={ {color:'green',fontSize:'70px'} }>Welcome to About page</h1>
      <img src={img2} width='500' alt="Home" />
      </>
   )
}
export default About;