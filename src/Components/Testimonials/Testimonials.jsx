import React, { useState } from 'react'
import "./Testimonials.css";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const Testimonials = () => {

   const [norwayIndex, setNorwayIndex] = useState(0);
   const [pragueIndex, setPragueIndex] = useState(0);
   const [chinaIndex,  setChinaIndex] = useState(0);

   const norwayPictures = ['https://eu-assets.simpleview-europe.com/svalbard/imageresizer/?image=%2Fdbimgs%2FNordlysVinterNyGallery.jpg&action=MediaGallery', 'https://assets.vogue.com/photos/5a8a3be67cea34278b66789d/master/w_1600%2Cc_limit/02-travel-guide-to-svalbard-islands-norway-north-pole.jpg', 'https://cdn.britannica.com/31/170931-050-01221459/Summer-landscape-Spitsbergen-Svalbard-Norway.jpg'];
   const praguePictures = ['https://cdn.wallpapersafari.com/19/46/UWMBKf.jpg', 'https://www.travelandleisure.com/thmb/8kdd3Y0uI2qSjm1-4vIwGDrqKGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prague-castle-czech-republic-PRACAS0302-25faba77a59f404aac2ea3579323dad2.jpg', 'https://media.nomadicmatt.com/2022/pragueitinerary.jpeg'];
   const chinaPictures = ['https://www.mostbeautifulspots.com/wp-content/uploads/2016/10/Zhangjiajie-National-Forest-Park-China-.jpg', 'https://cdn.theatlantic.com/media/img/photo/2018/05/travel-monday-a-photo-trip-to-zhang/z01_1021238707/main_1500.jpg', 'https://nationalparks-15bc7.kxcdn.com/images/parks/zhangjiajie/Zhangjiajie%20National%20Park.jpg'];

   const handleNorwayBackward = () => {
    setNorwayIndex(prevIndex =>
       prevIndex === 0 ? norwayPictures.length - 1 : prevIndex - 1
     );
   };

   const handleNorwayForward = () => {
    setNorwayIndex(prevIndex => (prevIndex + 1) % praguePictures.length);
  };

   const handlePragueForward = () => {
     setPragueIndex(prevIndex => (prevIndex + 1) % praguePictures.length);
   };

   const handlePragueBackward = () => {
   setPragueIndex(prevIndex =>
       prevIndex === 0 ? praguePictures.length - 1 : prevIndex - 1
     );
   };

   const handleChinaForward = () => {
     setChinaIndex(prevIndex => (prevIndex + 1) % chinaPictures.length);
   };

   const handleChinaBackward = () => {
     setChinaIndex(prevIndex =>
       prevIndex === 0 ? chinaPictures.length - 1 : prevIndex - 1
     );
   };





  return (


<div className='main-testimonials-container'>
  <div className='testimonials-color-container'>
    <h2 className='testimonials-heading'>TESTIMONIALS OF OUR TRIPS</h2>
    <h2 className='testimonials-second-heading'>Completed Journeys</h2> 

<div className='pictures-testimonials-container'>

     <div className='norway-details'>
        <h1>Svalbard</h1>
          <img
              src={norwayPictures[norwayIndex]}
              alt="Norway"
              className="norway-details"
            />  

          <button className='next-norway-button' onClick={handleNorwayBackward}>
            <AiFillCaretLeft className='next-icon' />
          </button>
          <button className='next-norway-button' onClick={handleNorwayForward}>
            <AiFillCaretRight className='next-icon' />
          </button>
       
</div>

<div className='secondary-testimonials-container'>
  <div className='prague-details'>
    <h1>Prague</h1>
     <img
                src={praguePictures[pragueIndex]}
                alt="Prague"
                className="prague-details"
              /> 

          <button className='next-prague-button' onClick={handlePragueBackward}>
  <AiFillCaretLeft className='next-icon' />
</button>
<button className='next-prague-button' onClick={handlePragueForward}>
  <AiFillCaretRight className='next-icon' />
</button>

  </div>

  <div className='china-details'>
    <h1>Zhangjiajie National Park</h1>
     <img
                src={chinaPictures[chinaIndex]}
                alt="China"
                className="china-details"
              /> 

<button className='next-china-button' onClick={handleChinaBackward}>
  <AiFillCaretLeft className='next-icon' />
</button>
<button className='next-china-button' onClick={handleChinaForward}>
  <AiFillCaretRight className='next-icon' />
</button>
         
     </div>
  </div>

 </div>
    
 </div>
 </div>
                                     
 )
}
 export default Testimonials