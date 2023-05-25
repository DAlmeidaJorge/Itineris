import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import HeroSection from './Components/HeroSection/HeroSection.jsx';
// import Destinations from './Components/HeroSection/Destinations/Destinations';
// import AboutUs from './Components/AboutUs/AboutUs';
// import Testimonials from './Components/Testimonials/Testimonials';
// import Faq from './Components/FAQ/Faq';
// import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Other components */}
          
        <Routes>
        <Route path="/" element ={<Homepage />} />
        
          
          <Route path="/gallery" element={<Gallery />} />
          

          <Route path="/contact" element ={<Contact />} />
        </Routes>
        

        
      </div>
    </Router>
  );
}

export default App;
