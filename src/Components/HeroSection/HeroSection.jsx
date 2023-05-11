import React from 'react';
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div>
    <img className='background-cover' src ="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper.jpg" alt="nature-img" width={"100%"} height={"700px"} />
    
      <div className="nav-section-container">
    <div className="logo">
      <h1>Itineris</h1>
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
      <h3 className="quote-section">
      Embrace the unknown , Explore the uncharted</h3>
    </div>
    <button className="learn-button">
      Learn More
    </button>
    <div className="main-footer-container">
    <div className="first-footer-container">
      <h4>01</h4>
      <h3>Choose place, activity and time</h3>
      <h5>Craft Your Dream Getaway: Plan Your Ideal Trip </h5>
      
    </div>
    <div className="second-footer-container">
      <h4>02</h4>
      <h3>Find people with the same travel plans</h3>
      <h5>You can find people with the same interests, who know the routes you've never traveled</h5>
      
    </div>
    <div className="third-footer-container">
      <h4>03</h4>
      <h3>Start chat and offer to go on a joint adventure</h3>
      <h5>Discuss the details of your trip and have a great time! You might find a great friend for life</h5>
      
    </div>
    </div>
    </div>
    
  )
}

export default HeroSection