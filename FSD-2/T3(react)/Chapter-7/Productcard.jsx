import img1 from "./assets/electronic1.jfif"
import img2 from "./assets/electronic2.jfif"
import img3 from "./assets/electronic3.jfif"
import Productlist from "./Productlist.jsx"
function Productcard(){
const products=[ 
   {name:'Product1',price:65000,rating:4.5,image:img1},
   {name:'Product1',price:50000,rating:5.0,image:img2},
   {name:'Product1',price:35000,rating:3.5,image:img3}
]
return(
   <>
   <Productlist data={products} />
   </>
)
}
export default Productcard;