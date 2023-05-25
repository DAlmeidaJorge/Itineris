import React from 'react'




import HeroSection from '../Components/HeroSection/HeroSection.jsx';
import Destinations from '../Components/HeroSection/Destinations/Destinations';
import AboutUs from '../Components/AboutUs/AboutUs';
import Testimonials from '../Components/Testimonials/Testimonials';
import Faq from '../Components/FAQ/Faq';
import Footer from '../Components/Footer/Footer';



function Homepage() {
  return (
    
      <div className="Homepage">
      
        <HeroSection />
        <Destinations />
        <AboutUs />
        <Testimonials />
        <Faq />
       
        <Footer />

        
          
    
        
      </div>
    
  );
}

export default Homepage;
