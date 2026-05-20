// we can return only one root element so we use div tag
/*function Comp1(){
   return(
      <div>  
      <h1>Hello Jayveer</h1>
      <h3>Welcome</h3>
      <img src="/favicon.svg" width='300' />
      </div>
   )
}
export default Comp1;   */

import img1 from "./assets/hero.png"
function Comp1(){
   var n="Jayveer";
   return (<>
      <img src={img1} className="i1" />
      <h3 style={ {color:"Blue",fontSize:"35px",
         fontStyle:"italic",textDecoration:"underline"
      } }>
      Hello {n} </h3>
      <h4>"{n}"</h4>
      <h5>{"{n}"}</h5>
      </>
   )
}
export default Comp1;