import React from 'react';
import "./HeroSection.css";


const HeroSection = () => {
  return (
    <div>
    <img className='background-cover' src ="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper.jpg" alt="nature-img" width={"100%"} height={"700px"} />
    
      <div className="nav-section-container">
    <div className="logo">
      <h1>itineris</h1>
      </div>
      <ul className='nav-bar-section'>
        <li>Destinations</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Testimonials</li>
        <li>Sign in</li>
      </ul>
    </div>
    <div className="hero-section">
      <h1>Begin your Journey now</h1>
      <h2 className="quote-section">
      Embrace the unknown , Explore the uncharted</h2>
    </div>
    <button className="learn-button">
      Learn More
    </button>
    <div className="main-footer-container">
    <div className="first-footer-container">
      <h1 className="footer-number">01</h1>
      <h2 className="footer-title">Choose place, activity and time</h2>
      <h3 className="footer-text">Craft Your Dream Getaway: Plan Your Ideal Trip </h3>
      
    </div>
    <div className="second-footer-container">
      <h1 className="footer-number">02</h1>
      <h2 className="footer-title">Find people with the same travel plans</h2>
      <h3 className="footer-text">You can find people with the same interests, who know the routes you've never traveled</h3>
      
    </div>
    <div className="third-footer-container">
      <h1 className="footer-number">03</h1>
      <h2 className="footer-title">Start chat and offer to go on a joint adventure</h2>
      <h3 className="footer-text">Discuss the details of your trip and have a great time! You might find a great friend for life</h3>
      
    </div>
    </div>
    </div>
    
  )
}

export default HeroSection