import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorenm dasdtadeoir skdfjeor cdlfkerroefu skdfdroeur skdfdorerue fsldfjeirue fsdlafdjre ru sfdkfjeorue fdkfjdoreirjs fkdfjei fdkdkf ir ierfjd fie eif fdkjf ier r</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 233 333 222</li>
                    <li>tomato@mail.com</li>
                </ul>
            </div>
        </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 &copy; tomato.com - All rights reserved</p>
    </div>
  )
}

export default Footer
