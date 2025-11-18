import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [curState,setCurState]=useState("login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className='login-popup-title'>
                <h2>{curState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
            </div>
            <div className="login-popup-inputs">
                {curState==="login"?<></>:<input type="text" placeholder='Your name' required/>}
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='password' required/>
            </div>
            <button>{curState==="sign up"?"Create Account":"login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>by continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {curState==="login"
            ?<p>Create a new account? <span onClick={()=>setCurState("sign up")}>Click here</span></p>
            :<p>Already have an account<span onClick={()=>setCurState("login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup
