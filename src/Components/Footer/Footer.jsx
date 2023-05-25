import React from 'react';
import {BsTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {SiYourtraveldottv} from "react-icons/si"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="itineris-container">
        <div className="icon-itineris-container">
        <h4>ITINERIS</h4>
        <SiYourtraveldottv/>
        </div>
        <h5>Discover new horizons and make unforgettable memories </h5>
        <div className='phone-container'>
        <BsTelephoneFill />
       <h5>(123) -456-789</h5>
         </div>
        <div className='email-container'>
          <AiOutlineMail />
        <h5>itineris@gmail.com</h5>
         </div>
       </div>
       <div className="company-container">
        <h4>COMPANY</h4>
        <h5>Lisbon</h5>
        <h5>Journeys</h5>
        <h5>Mobile</h5>
        <h5>Blog</h5>
        <h5>How we Work</h5>
        
       </div>
       <div className="working-container">
        <h4>WORKING HOURS</h4>
        <h5>Mon - Fri: 9:00 AM - 9:00 PM</h5>
        <h5>Sat: 9:00 AM - 19:00 PM</h5>
        <h5>Sun: Closed</h5>
       </div>
       <div className="contact-container">
        <h4>Contact us</h4>
        <h5>Have a question or need more information? Let us help you plan your dream adventure!"</h5>
        <div>
    {/* <input type="email-section" placeholder="Enter your email"  className="email-input"/> */}
    <br />
    <Link to="/contact">
    <button className='submit-button'>Contact us</button>
    
    </Link>
  </div>
       </div>
        {/* <div className="footer-icons">
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        </div> */}
       {/* <div>
       <h1 className='footer-text'>Copyright (c) 2023 Itineris</h1> 
       </div> */}
      </div> 
       
    
  );
}

export default Footer;
       
      
       
        
        
       
        
