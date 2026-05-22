function Events2(){
   const hdc=()=>{
      alert ('You clicked twice !!!')
   }
   const handlesubmit=(e)=>{
      e.preventDefault();
      var u=document.getElementById('un').value;
      alert (`Welcome ${u} !`)
   }
    const hc=(e)=>{
      document.getElementById('test').innerHTML=e.target.value;
      console.log(e.target.value);
   }
   return (
      <>
      <h1>Events Example</h1>
      <form onSubmit={handlesubmit}>
         <input id='un' onChange={hc}/>
         <input type="submit"/>
      </form>
      <h2 id="test"></h2>
      <button onDoubleClick={hdc} >Click</button>
      </>
   )
}
export default Events2