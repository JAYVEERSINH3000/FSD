import img1 from "../assets/homepageimage.png";
function Home(){
   return(
      <>
      <h1 style={ {color:'purple',fontSize:'50px'} }>Welcome to Home page</h1>
      <img src={img1} width='300' alt="Home" />
      </>
   )
}
export default Home;