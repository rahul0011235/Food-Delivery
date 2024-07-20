import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
      <div className="footer-content-left">
     <img src={assets.logo} alt="" />
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptatum quasi reprehenderit dolor fugiat vitae recusandae, dolore in minima doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, debitis amet voluptates iure distinctio repudiandae.</p>
      
      <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
      </div>
      </div>
      <div className="footer-content-center">
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>privacy policy</li>
         </ul>
      </div>

      <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
            <li>+1-222-456-6789</li>
            <li>Contact@tomato,com</li>
         </ul>
      </div>
      
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 Tomato.com</p>
    </div>
  )
}

export default Footer
