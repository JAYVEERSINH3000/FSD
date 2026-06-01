import {useState} from "react";
import img1 from "./assets/air.jfif";
import img2 from "./assets/electronic1.jfif";
import img3 from "./assets//electronic2.jfif";
import img4 from "./assets/railway.jfif";
import img5 from "./assets/stego.jfif";

function US4(){
   const arr = [img1,img2,img3,img4,img5];
   const [image,setimage] = useState(arr[0]);

   function handleimage(){
      const i = Math.floor(Math.random()*arr.length)
      setimage(arr[i])
   }
   return(
      <>
      <img src={image} height='300' width='400' />
      <button onClick={handleimage} >Change Image</button>
      </>
   )
}
export default US4;