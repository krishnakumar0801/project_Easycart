import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Navbars from './Navbar';
function Newuser() {
  var navigation=useNavigate()
  var [formdata,setformdata]=useState({
    name:'',
    email:'',
    password:''

  })
  
  var [error,seterror]=useState({});

  var inputhandle=(event)=>{

      setformdata({
        ...formdata,[event.target.name]: event.target.value
      })
  }

  var handlesubmit=(event)=>{
    event.preventDefault();

    var validationerror ={};

    if(!formdata.name.trim()){
     validationerror.name="Name is Required"
    }
  if(!formdata.email.trim()){
    validationerror.email='Email is requird'
    }
   else if(!formdata.email.includes('@')){
      validationerror.email="Invalid email address"
    }
    if(!formdata.password.trim()){
      validationerror.password ='Password is required'
      }else if(formdata.password.length <6){
      validationerror.password='Password should be at least 6 characters long'
      }
    if(Object.keys(validationerror).length>0){
      seterror(validationerror);
    }
    else{
      <Navbars username={"krishna"}/>
      navigation('/Home')
      
    }
  }
  

  return (
    <div>
        <div className='registerpage'>
        <div className='brandtitle-three'> <span className='brandtitle-signin'>Easy
        </span>Cart</div>
          <form className='shadow-lg form'  >
          <h3 className='title_text'>Regsiter</h3>
          
            <div>
              <p className='titlelabel'>Your name</p>
              <input className='inputbox' name='name' value={formdata.name}
              onChange={inputhandle} type='text' placeholder='First and last name'  required />
              <div className='validationmessage'>
                
              {error.name && <p>{error.name}</p>}
              </div>
             
            </div>
            <div>
              <p className='titlelabel'>Mobile number(Optional)</p>
              <input className='inputbox' name="phonenumber"  
             type='text' placeholder='Phone number' required />
              
            </div>
            <div>
              <p className='titlelabel'>Email </p>
              <input className='inputbox' name='email' 
              onChange={inputhandle} type="email" value={formdata.email} placeholder='Email' required/>
              <div className='validationmessage'>
              {error.email && <p>{error.email}</p>}
              </div>
              
            </div>
            <div>
              <p className='titlelabel'>Password</p>
              <input className='inputbox' name='password' 
               onChange={inputhandle} type="Password" value={formdata.password} placeholder='Password' required/>
               <div className='validationmessage'>
               {error.password && <p>{error.password}</p>}
               </div>
               
            </div>
            <div>
              <p className='note'>By enrolling your mobile phone number,
                you consent  <br /> to receive automated security notifications via text  <br /> message from Easycart.
                Message and data rates may apply.</p>
            </div>
            
            <div>
            <button className='bg-dark button btn btn-sm text-light' onClick={handlesubmit} >Regsiter</button>
            </div>
            </form>
            
        </div>

    </div>
  )
}

export default Newuser