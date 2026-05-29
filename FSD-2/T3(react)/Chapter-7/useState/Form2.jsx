import {use, useState} from 'react';
function Form2(){
   const [formdata,setformdata] = useState({});
   function handlechange(e){
      const {name,value}=e.target;
      setformdata( {...formdata,[name]:value})
   }
   function handlesubmit(e){
      e.preventDefault();
      if(!formdata.uname | !formdata.contact | !formdata.pass | !formdata.cpass ){
         alert(`All fields are required`)
      }
      else if (!/^\d{10}$/.test(formdata.contact)){
         alert(`Contact Number must be 10 digits`)
      }
      else if(formdata.pass.length <8){
         alert(`Password length  must be greater 8`)
      }
      else if(formdata.cpass.length <8){
         alert(`Password length  must be greater 8`)
      }
      else if(formdata.pass != formdata.cpass){
         alert(`Pass and Conform pass must be same`)
      }
      else{
         alert(`Thank you ! \n
         Username : ${formdata.uname}
         Contact Number : ${formdata.contact}
         Password : ${formdata.pass}
         Conform Password : ${formdata.cpass}`);
      }
   }
   return(
      <>
      <form onSubmit={handlesubmit} >
         <label>User Name: </label>
         <input type='text' name='uname' onChange={handlechange} /> <br/><br/>
         <label>Contact Num: </label>
         <input type='number' name='contact' onChange={handlechange}/> <br/><br/>
         <label>password: </label>
         <input type='password' name='pass' onChange={handlechange} />  <br/><br/>
         <label>Conform password: </label>
         <input type='password' name='cpass' onChange={handlechange}/>  <br/><br/>
         <input type='submit' />
      </form>
      </>
   )
}
export default Form2;