import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink,Outlet } from 'react-router-dom'
import '../App.css'


function Signin() {
  
    var navigate= useNavigate()
    
    return (
      <div>
       
        <div className='sign-inpage'>
       <div className='brandtitle-three'> <span className='brandtitle-signin'>Easy</span>Cart</div>
      <form className='shadow-lg form'>
      <h3 className='title_text'>Sign-in</h3>
      <div className='email_box'>
        <label>Email </label>
        <input type="email" />
      </div>
      <div className='password_box'>
        <label>Password </label>
        <input type="password" />
      </div>
      <div>
        <button className='bg-dark button btn btn-sm text-light'>Submit</button>
      </div>
      <p className='policynote'>By Continuing, you agree to Easycart's<br /> <NavLink to="/Policy" className="policylink">Contitions of Use</NavLink>
      <span> and </span>
      <NavLink to="/Policy" className="policylink">Privacy Notice.</NavLink></p>
      </form>
      <p className='newuser'>New to Easycart?</p>

      <button className='btn btn-sm bg-dark text-light' onClick={()=>navigate("/Newuser")}>ClickHere</button>
      <Outlet />
        </div>
       </div>
    )
  }


export default Signin