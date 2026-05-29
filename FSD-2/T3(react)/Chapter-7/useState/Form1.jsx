import {use, useState} from 'react';
function Form1(){
   const [formdata,setformdata] = useState({});
   function handlechange(e){
      const {name,value}=e.target;
      setformdata( {...formdata,[name]:value})
   }
   function handlesubmit(e){
      e.preventDefault();
      alert(`Thank you ! \n
         Firstname : ${formdata.fname}
         Email : ${formdata.eid}
         Password : ${formdata.pass}
         Conform Password : ${formdata.cpass}
         Message : ${formdata.msg}
         Gender : ${formdata.gender}
         City : ${formdata.city}`);
   }
   return(
      <>
      <form onSubmit={handlesubmit} >
         <label>First Name: </label>
         <input type='text' name='fname' onChange={handlechange} /> <br/><br/>
         <label>Email: </label>
         <input type='email' name='eid' onChange={handlechange} />   <br/><br/>
         <label>Password: </label>
         <input type='password' name='pass' onChange={handlechange} /> <br/><br/>
         <label>Conform password: </label>
         <input type='password' name='cpass' onChange={handlechange} />  <br/><br/>
         <label>Textarea: </label>
         <textarea name='msg' onChange={handlechange} ></textarea>   <br/><br/>
         <label>Gender: </label>
         <input type='radio' name='gender' value='male' onChange={handlechange} />Male
         <input type='radio' name='gender' value='female' onChange={handlechange} />Female   <br/><br/>
         <select name='city' onChange={handlechange} >
            <option value='Ahm'>Ahmedabad</option>
            <option value='Rajkot'>Rajkot</option>
         </select> <br/><br/>
         <input type='submit' />
      </form>
      </>
   )
}
export default Form1;