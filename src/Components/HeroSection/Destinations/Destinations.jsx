import React from 'react'
import "./Destinations.css";

const Destinations = () => {
  const handleSloveniaClick = () => {
    window.open(
      "https://www.booking.com/region/si/blejsko-jezero.en.html?aid=1610831;label=blejsko-jezero-nRiX*a9GSHdAVeufrG0AkgS541058991985:pl:ta:p1:p2:ac:ap:neg:fi:tiaud-2009482408685:kwd-455691034477:lp1011742:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YVv642bd3dABkan2IoU65Cs;ws=&gad=1&gclid=CjwKCAjwgqejBhBAEiwAuWHioOzpj8aHdbgJDH-gqmunLIXkjxyZBw4GghD3HWe8Kr7v7ZIlfXnNqRoCZFkQAvD_BwE",
      "_blank" //blank importante para abrir uma pagina num separador a parte
    );
  };

  const handlePragueClick = () => {
    window.open(
      "https://www.booking.com/city/cz/prague.html?aid=1610684;label=prague-EFzB9y*jmeYIzwO2mdbGkAS541258789667:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-308278145978:lp1011742:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0;ws=&gad=1&gclid=CjwKCAjwgqejBhBAEiwAuWHioMHFOjHWpeypgqHgNDA1AeEnuECCPKIBzZ-XGPt76u0oCVovXIY3aRoCtKUQAvD_BwE",
      "_blank" //blank importante para abrir uma pagina num separador a parte
    );
  };

  const handleItalyClick = () => {
    window.open(
      "https://www.booking.com/region/it/lecinqueterre.en.html?aid=1610831;label=lecinqueterre-f79xymTGy8jcS5LWbg0HSwS540981904263:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-1858199611:lp1011742:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YVv642bd3dABkan2IoU65Cs;ws=&gad=1&gclid=CjwKCAjwgqejBhBAEiwAuWHioGBMpn5MTSQN_gTsD_K9VcX3CszKKl672ODC8ibRedGSyZdN-WUFEhoCvJUQAvD_BwE",
      "_blank" //blank importante para abrir uma pagina num separador a parte
    );
  };
  
  return (
       <div className='main-destination-container'>
        
      <h1 className='where-heading'>WHERE TO GO</h1>
      <h1 className='destinations-heading'>Trending Offers</h1>
      <div className='pictures-container'>
         
      <div className='slovenia-container'>
        <div className='slovenia-details'>
        <h1 className='country-title'>Slovenia</h1>
        <h1>Lake Bled</h1>
        <button onClick={handleSloveniaClick} className='learn-more-button'>
      BOOK NOW!
    </button>
        </div>
    
      </div>
      <div className='croatia-container'>
        <div className='slovenia-details'>
        <h1 className='country-title'>Croatia</h1>
        <h1>Hvar</h1>
        <button onClick={handlePragueClick} className='learn-more-button'>
        BOOK NOW!
    </button>
        </div>
      </div>
      <div className='italy-container'>
        <div className='slovenia-details'>
        <h1 className='country-title'>Italy</h1>
        <h1>Cinque Terre</h1>
        <button onClick={handleItalyClick} className='learn-more-button'>
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