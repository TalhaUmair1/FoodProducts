import React from 'react'
import './Login.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const Login = ({setShowLogin}) => {

     const [curentState,setCurentState]=useState("Login Up")
  return (
    <div className='login-pop'>
        <form  className="login-container">
            <div className="login-title">
                <h2>{curentState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="inputs">

            {curentState === "Login"?<></>:  <input type="text"placeholder='Your Name Please' required/>}

                <input type="email"placeholder='Please Enter your Valid Email' required />
                <input type="password"placeholder='Enter Your Password' />
            </div>
            <button>{curentState==="Login Up"?"Create Account":"Login First Please"}</button>
            <div className="login-condition">
                <input type="checkbox" required />
                <p>By continuing@ i agree to the terms of use and privacy policy</p>
            </div>
            {curentState==="Login"?<p>Create a New Account? <span onClick={()=>{setCurentState("Sign Up")}}>Click Here</span></p>:
            <p>Already have an account? <span onClick={()=>{setCurentState("Login")}}>Login Here</span></p>}
        
        </form>
    </div>
  )
}

export default Login