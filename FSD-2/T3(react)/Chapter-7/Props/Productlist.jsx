function Productlist(props){
   return(
      <> <table border="1">
      {
         props.data.filter((p)=>p.rating>4).map((p)=>
            <tr>
               <th>{p.name}</th>
               <th> <img src={p.image}></img>{p.image}</th>
               <th>{p.rating}</th>
               <th>{p.price}</th>
            </tr>
         )}
         </table>
      </>
   )
}
export default Productlist;