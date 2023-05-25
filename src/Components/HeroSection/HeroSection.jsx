import React from 'react';
import "./HeroSection.css";
import { Link, animateScroll as scroll } from 'react-scroll';



const HeroSection = () => {

  const handleLearnmoreClick = () => {
    window.open(
      "https://www.nationwide.com/lc/resources/home/articles/travel-safety-tips",
      "_blank" //blank importante para abrir uma pagina num separador a parte
    );
  };

  return (
    <div >
    <img className='background-cover' src ="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper.jpg" alt="nature-img" width={"100%"} height={"100%"} opacity={"90%"} />
    
      <div className="nav-section-container">
        
    <div className="logo">
      <h1>itiner<span>i</span>s</h1>
      </div>
      <ul className='nav-bar-section'>
        
        <li>
        <Link
        activeClass="active"
        to="main-destination-container"
        spy={true}
        smooth={true}
        offset={-70} 
        duration={500}
      >
          Trending Offers
          </Link>
        </li>
        <Link
        activeClass="active"
        to="about-us-main"
        spy={true}
        smooth={true}
        offset={-70} 
        duration={500}
      >
          About
          </Link>
          <li>
    <Link
      activeClass="active"
      to="main-testimonials-container"
      spy={true}
      smooth={true}
      offset={-70} 
      duration={500}
    >
      Testimonials
    </Link>
  </li>
  <li>
    <Link
      activeClass="active"
      to="color-container"
      spy={true}
      smooth={true}
      offset={-70} 
      duration={500}
    >
       FAQ
    </Link>
  </li>
  <li>
    
  </li>
      </ul>
    </div>
    <div className="hero-section">
      <h1 className="hero-section-quote">Begin your <span>Journey</span> now!</h1>
      <h2 className="quote-section">
      Embrace the unknown , Explore the uncharted</h2>
    </div>
    <button onClick={handleLearnmoreClick} className="learn-button">
      Learn More!
    </button>
    <div className="main-footer-container">
    <div className="first-footer-container">
      <h1 className="footer-number">01</h1>
      <h2 className="footer-title">Exploring Hidden Gems!</h2>
     
      
    </div>
    <div className="second-footer-container">
      <h1 className="footer-number">02</h1>
      <h2 className="footer-title">The Ultimate Travel Hacks: Simplify Your Journey, Maximize Your Adventure!</h2>
      
      
    </div>
    <div className="third-footer-container">
      <h1 className="footer-number">03</h1>
      <h2 className="footer-title">Embark on a transformative journey of self-discovery and empowerment with our solo travel tips!</h2>
     
      
    </div>
    </div>
    </div>
    
  )
}

export default HeroSection