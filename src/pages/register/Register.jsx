import React from 'react'
import { Link } from 'react-router-dom';
import './register.css';
const Register = () => {
  return (
   <>
    <div class="container">
    <input id="signup_toggle" type="checkbox"/>
    <form class="form">
        <div class="form_front">
            <div class="form_details">SignUp</div>
            <input type="text" class="input" placeholder="Firstname"/>
            <input type="text" class="input" placeholder="Username"/>
            <input type="text" class="input" placeholder="Password"/>
            <input type="text" class="input" placeholder="Confirm Password"/>
            <Link to={'/login'}>
            <button class="btn ">Signup</button>
                </Link>
        </div>
    </form>
</div>
   </>
  )
}

export default Register
