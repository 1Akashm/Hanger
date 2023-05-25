import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <>
    <div class="login-box">
 <form className='mt-27'>
   <div class="user-box">
     <input type="text"/>
     <label>Username</label>
   </div>
   <div class="user-box">
     <input type="password" />
     <label>Password</label>
   </div><center>
   <Link to={'/'}>
          Login
      <span></span>
   </Link></center>
     <span class="switch">Don't have an account?
                
                <label for="signup_toggle">
                <Link to={'/register'} className="signup_tog"> Sign Up </Link>
                </label>
               
            </span>
 </form>
</div>

  
    </>
  )
}

export default Login
