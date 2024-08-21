import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
    <div className="footer-content">
        <div className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
         <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
        </div>
        <div className="footer-content-center">
         <h2>COMPANy</h2>
         <ul>
            <li>Home</li>
            <li>About Us</li>   
            <li>Delivery</li>
            <li>Privacy Policy</li>
         </ul>
    </div>
        <div className="footer-content-right">
              <h2>Get Into Touch</h2>
              <ul>
                <li>+1 234 567 890</li>
                <li>3Dp2tomato.com</li>

              </ul>
        </div>
       
    </div>
    <hr/>
    <div className="footer-copyright">
        copy right 2002 @All the are reserved
    </div>
    </div>
  )
}

export default Footer;