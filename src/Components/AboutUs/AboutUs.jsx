import React from 'react';
import "./AboutUs.css";

const AboutUs = () => {
  return (


      
    <div className='about-us-main'>
            
     <div className='about-us-text-container'>
                 <h2 className='who-title'>WHO WE ARE</h2>
                 <h2 className='about-title'>About Us</h2>
            <p className='about-text'>Discover the world with Itineris! We're your ultimate travel companion, offering curated destinations, captivating galleries,and authentic traveler testimonials. Plan your adventure,
                 find inspiration, and unlock unforgettable experiences. Join our passionate community of wanderers and start exploring today!</p>
                 <div className='about-statistics-container'>
          <div className='main-subtitle-number-container'>
                    <div className='subtitle-number-container'>
                    <h2 className='about-description'>Activities</h2>
                    <h2 className='numbers'>45</h2>
                        </div>
                    <div className='subtitle-number-container'>
                    <h2 className='about-description'>Countries</h2>
                    <h2 className='numbers'>35</h2>
                        </div>
                        <div className='subtitle-number-container'>
                    <h2 className='about-description'>Testimonials</h2>
                    <h2 className='numbers'>80</h2>
                       </div>
                       <div className='subtitle-number-container'>
                    <h2 className='about-description'>Photographs</h2>
                    <h2 className='numbers'>+100</h2>
                    </div>
                    </div>
                 </div>
            <button className='contact-button'>Contact Us</button>
                 </div>
         <img className='about-cover' src ="https://media.istockphoto.com/photos/travel-planning-concept-on-map-picture-id891573112?b=1&k=20&m=891573112&s=612x612&w=0&h=cEVoMlFS_LmuQVlRthh3-tE4d_iZacnXXT8WvtFrddg=" alt="map-img" width={"25%"} height={"25%"} opacity={"90%"} /> 
                 </div>
        

    
     
      
)
}

export default AboutUs