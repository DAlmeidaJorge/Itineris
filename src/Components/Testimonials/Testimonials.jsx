import React from 'react'
import "./Testimonials.css";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const Testimonials = () => {
  return (


<div className='main-testimonials-container'>
    <h2 className='testimonials-heading'>TESTIMONIALS OF OUR TRIPS</h2>
    <h2 className='testimonials-second-heading'>Completed Journeys</h2> 

<div className='pictures-testimonials-container'>

     <div className='norway-details'>
        <h1>Svalbard</h1>
      
          <button className='next-norway-button'>
            <AiFillCaretLeft className='next-icon' />
          </button>
        <button className='next-norway-button'>
            <AiFillCaretRight className='next-icon' />
          </button>
       
</div>

<div className='secondary-testimonials-container'>
  <div className='prague-details'>
    <h1>Prague</h1>
  
          <button className='next-prague-button'>
            <AiFillCaretLeft className='next-icon' />
          </button>
    <button className='next-prague-button'>
            <AiFillCaretRight className='next-icon' />
          </button>

  </div>

  <div className='china-details'>
    <h1>Zhangjiajie National Park</h1>
  
          <button className='next-china-button'>
            <AiFillCaretLeft className='next-icon' />
          </button>
    <button className='next-china-button'>
            <AiFillCaretRight className='next-icon' />
          </button>
         
     </div>
  </div>

 </div>
    

 </div>
                                     
 )
}
 export default Testimonials