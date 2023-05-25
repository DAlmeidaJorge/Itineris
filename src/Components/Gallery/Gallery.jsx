import React from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import "./Gallery.css";
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Gallery = () => {

const norway1 = 'https://www.worldatlas.com/r/w768/upload/cc/53/f5/northern-lights-longyearbyen-spitsbergen-island-svalbard-norway-ginger-polina-bublik.jpg'
const norway2 = 'https://images.rove.me/w_1920,q_85/gsoal8lzugn7a6hbz1bp/svalbard-northern-lights.jpg'
const norway3 = 'https://www.discover-the-world.com/app/uploads/2018/08/svalbard-aurora-over-camp-barentz-htgrtn-800x600-c-default.jpg'
const italy1 = 'https://media.nomadicmatt.com/2022/cinqueterreguide8.jpg'
const italy2 = 'https://static.independent.co.uk/2021/08/10/15/iStock-1271579758.jpg'
const italy3 = 'https://media.timeout.com/images/105746171/image.jpg'
const prague1 ='https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/07/HERO-Prague-Cityscape-at-Sunset-Czech-Republic-GettyImages-901421310.jpg?quality=75&strip=all&w=2440&h=960'
const prague2 ='https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg'
const prague3= 'https://www.travelandleisure.com/thmb/8kdd3Y0uI2qSjm1-4vIwGDrqKGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prague-castle-czech-republic-PRACAS0302-25faba77a59f404aac2ea3579323dad2.jpg'
const croatia1 ='https://lp-cms-production.imgix.net/2019-06/d9175fc0fbca91cd35a1388a17588e6d-fortica.jpg'
const croatia2 ='https://images.musement.com/cover/0095/24/hvar-jpeg_header-9423783.jpeg'
const croatia3 ='https://worldstrides.com/wp-content/uploads/2018/09/Dubrovnik-Croatia.jpg'
const china1 = 'https://media.istockphoto.com/id/1204394331/photo/national-park-in-china-with-avatar-mountains.jpg?s=612x612&w=0&k=20&c=n4gY-wlBLZaQscQQgXQ2HVGBGnirkqNIAm2nVcjg2hg='
const china2 = 'https://watermark.lovepik.com/photo/20211120/large/lovepik-zhangjiajie-national-forest-park-picture_500392566.jpg'
const china3 = 'https://www.airpano.com/files/china-avatar-mountains/images/image3.jpg'
const slovenia1 ='https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2021/11/Ljubljana-Slovenia.jpg'
const slovenia2 ='https://s27363.pcdn.co/wp-content/uploads/2020/05/Slovenia-Itinerary.jpg.optimal.jpg'
const slovenia3 = 'https://media.nomadicmatt.com/2021/sloveniathoughts1a.jpg'
const greece1 ='https://static.independent.co.uk/s3fs-public/thumbnails/image/2021/06/02/20/istock-833264986.jpg'
const greece2= 'https://cdn.britannica.com/61/179661-138-6F13E02A/Overview-Athens.jpg?w=800&h=450&c=crop'
const greece3= 'https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt01d6d1d3f09fa0c3/6139e2f0422c0828c05248a3/UK_Greece_GR_Header.jpg'
const turkey1 = 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Turkey-1.jpg'
const turkey2= 'https://www.travelandleisure.com/thmb/UXNrwYTm3z1CAEBl8z_sTxnyGEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/istanbul-turkey-ISTANBULTG0721-a987bb021e5e4b42b069ba2518cde276.jpg'
const turkey3='https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg'


const [norwayIndex, setNorwayIndex] = useState(0);
const [pragueIndex, setPragueIndex] = useState(0);
const [chinaIndex,  setChinaIndex] = useState(0);
const [italyIndex, setItalyIndex] = useState(0);
const [croatiaIndex, setCroatiaIndex] = useState(0);
const [sloveniaIndex, setSloveniaIndex] = useState(0);
const [greeceIndex, setGreeceIndex] = useState(0);
const [turkeyIndex, setTurkeyIndex] = useState(0);

const norwayPictures = [norway1, norway2, norway3];
const italyPictures = [italy1, italy2, italy3];
const croatiaPictures = [croatia1, croatia2, croatia3];
const praguePictures = [prague1, prague2, prague3];
const chinaPictures = [china1, china2, china3];
const sloveniaPictures = [slovenia1, slovenia2, slovenia3];
const greecePictures = [greece1, greece2, greece3];
const turkeyPictures = [turkey1, turkey2, turkey3];

const handleNorwayBackward = () => {
    setNorwayIndex(prevIndex =>
       prevIndex === 0 ? norwayPictures.length - 1 : prevIndex - 1
     );
   };

   const handleNorwayForward = () => {
    setNorwayIndex(prevIndex => (prevIndex + 1) % norwayPictures.length);
  };

   const handlePragueForward = () => {
     setPragueIndex(prevIndex => (prevIndex + 1) % praguePictures.length);
   };

   const handlePragueBackward = () => {
   setPragueIndex(prevIndex =>
       prevIndex === 0 ? praguePictures.length - 1 : prevIndex - 1
     );
   };

   const handleCroatiaForward = () => {
     setCroatiaIndex(prevIndex => (prevIndex + 1) % croatiaPictures.length);
   };

   const handleCroatiaBackward = () => {
     setCroatiaIndex(prevIndex =>
       prevIndex === 0 ? croatiaPictures.length - 1 : prevIndex - 1
     );
   };

   const handleItalyForward = () => {
    setItalyIndex(prevIndex => (prevIndex + 1) % italyPictures.length);
  };

  const handleItalyBackward = () => {
    setItalyIndex(prevIndex =>
      prevIndex === 0 ? italyPictures.length - 1 : prevIndex - 1
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

  const handleSloveniaForward = () => {
    setSloveniaIndex(prevIndex => (prevIndex + 1) % sloveniaPictures.length);
  };

  const handleSloveniaBackward = () => {
    setSloveniaIndex(prevIndex =>
      prevIndex === 0 ? sloveniaPictures.length - 1 : prevIndex - 1
    );
  };

  const handleTurkeyForward = () => {
    setTurkeyIndex(prevIndex => (prevIndex + 1) % turkeyPictures.length);
  };

  const handleTurkeyBackward = () => {
    setTurkeyIndex(prevIndex =>
      prevIndex === 0 ? turkeyPictures.length - 1 : prevIndex - 1
    );
  };

  const handleGreeceForward = () => {
    setGreeceIndex(prevIndex => (prevIndex + 1) % greecePictures.length);
  };

  const handleGreeceBackward = () => {
    setGreeceIndex(prevIndex =>
      prevIndex === 0 ? greecePictures.length - 1 : prevIndex - 1
    );
  };


  return (
    
    
    
      <div className="nav-gallery-container">
    <div className="gallery-logo">
      <h1>itineris</h1>
        
        
      </div>
     
      <ul className='gallery-nav-bar-section'>
        
        <li>
        <Link
       
        to="/"
      
      >
          Home
        </Link> 
        </li>
  
      </ul>
    <div className='pictures-gallery-container'>
       
     <div className='secondary-gallery-container'>
     <div className='norway-pictures'>
          <img
              src={norwayPictures[norwayIndex]}
              alt="Norway"
              width="380"
              height="340"
              className="norway-details-gallery"
            />  
          <button className='next-norway-button-gallery' onClick={handleNorwayBackward}>
            <AiFillCaretLeft className='next-icon-gallery' />
          </button>
          <button className='next-norway-button-gallery' onClick={handleNorwayForward}>
            <AiFillCaretRight className='next-icon-gallery' />
          </button>
       
   
</div>

  <div className='prague-pictures'>
    
     <img
                src={praguePictures[pragueIndex]}
                alt="Prague"
                width="380"
                height="340"
                className="prague-details-gallery"
              /> 

          <button className='next-prague-button-gallery' onClick={handlePragueBackward}>
  <AiFillCaretLeft className='next-icon-gallery' />
</button>
<button className='next-prague-button-gallery' onClick={handlePragueForward}>
  <AiFillCaretRight className='next-icon-gallery' />
</button>

  </div>

  <div className='china-pictures'>
    
     <img
                src={chinaPictures[chinaIndex]}
                alt="China"
                width="380"
                height="340"
                className="china-details-gallery"
              /> 

<button className='next-china-button-gallery' onClick={handleChinaBackward}>
  <AiFillCaretLeft className='next-icon-gallery' />
</button>
<button className='next-china-button-gallery' onClick={handleChinaForward}>
  <AiFillCaretRight className='next-icon-gallery' />
</button>
         
     </div>

     <div className='croatia-pictures'>
    
     <img
                src={croatiaPictures[croatiaIndex]}
                alt="Croatia"
                width="380"
                height="340"
                className="croatia-details-gallery"
              /> 

<button className='next-croatia-button-gallery' onClick={handleCroatiaBackward}>
  <AiFillCaretLeft className='next-icon-gallery' />
</button>
<button className='next-croatia-button-gallery' onClick={handleCroatiaForward}>
  <AiFillCaretRight className='next-icon-gallery' />
</button>


  </div>
</div>
<div className='third-gallery-container'>
  <div className='italy-pictures'>
    
     <img
                src={italyPictures[italyIndex]}
                alt="Italy"
                width="380"
                height="340"
                className="italy-details-gallery"
              /> 

<button className='next-italy-button-gallery' onClick={handleItalyBackward}>
  <AiFillCaretLeft className='next-icon-gallery' />
</button>
<button className='next-italy-button-gallery' onClick={handleItalyForward}>
  <AiFillCaretRight className='next-icon-gallery' />
</button>
</div>
<div className='slovenia-pictures'>
    
    <img
               src={sloveniaPictures[sloveniaIndex]}
               alt="Slovenia"
               width="380"
               height="340"
               className="slovenia-details-gallery"
             /> 

<button className='next-slovenia-button-gallery' onClick={handleSloveniaBackward}>
 <AiFillCaretLeft className='next-icon-gallery' />
</button>
<button className='next-slovenia-button-gallery' onClick={handleSloveniaForward}>
 <AiFillCaretRight className='next-icon-gallery' />
</button>
</div>
<div className='greece-pictures'>
    
    <img
               src={greecePictures[greeceIndex]}
               alt="Greece"
               width="380"
               height="340"
               className="greece-details-gallery"
             /> 

<button className='next-greece-button-gallery' onClick={handleGreeceBackward}>
 <AiFillCaretLeft className='next-icon-gallery' />
</button>
<button className='next-greece-button-gallery' onClick={handleGreeceForward}>
 <AiFillCaretRight className='next-icon-gallery' />
</button>
</div>
<div className='turkey-pictures'>
    
    <img
               src={turkeyPictures[turkeyIndex]}
               alt="Turkey"
               width="380"
               height="340"
               className="turkey-details-gallery"
             /> 

<button className='next-turkey-button-gallery' onClick={handleTurkeyBackward}>
 <AiFillCaretLeft className='next-icon-gallery' />
</button>
<button className='next-turkey-button-gallery' onClick={handleTurkeyForward}>
 <AiFillCaretRight className='next-icon-gallery' />
</button>
</div>

</div>
 </div>
    </div>
 
 
                                     
 )
}
  


export default Gallery