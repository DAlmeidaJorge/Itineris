import React from 'react'
import "./Destinations.css";

const Destinations = () => {
  return (
       <div className='main-destination-container'>
      <h1 className='where-heading'>WHERE TO GO</h1>
      <h1 className='destinations-heading'>Trending Offers</h1>
      <div className='pictures-container'> 
      <div className='slovenia-container'>
        <div className='slovenia-details'>
        <h1 className='country-title'>Slovenia</h1>
        <h1>Lake Bled</h1>
        <button className='learn-more-button'>
      BOOK NOW!
    </button>
        </div>
    
      </div>
      <div className='croatia-container'>
        <div className='slovenia-details'>
        <h1 className='country-title'>Croatia</h1>
        <h1>Hvar</h1>
        <button className='learn-more-button'>
        BOOK NOW!
    </button>
        </div>
      </div>
      <div className='italy-container'>
        <div className='slovenia-details'>
        <h1 className='country-title'>Italy</h1>
        <h1>Cinque Terre</h1>
        <button className='learn-more-button'>
        BOOK NOW!
    </button>
    </div>
      </div>
      
      </div>
      <div>
    
      </div>
      </div>
  )
}

export default Destinations