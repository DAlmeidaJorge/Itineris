import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection.jsx';
import Destinations from './Components/HeroSection/Destinations/Destinations';
import AboutUs from './Components/AboutUs/AboutUs';
import Testimonials from './Components/Testimonials/Testimonials';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
    
      <HeroSection />
      <Destinations />
       <AboutUs />
       <Testimonials />
       <Faq />
      <Contact />
      <Gallery />
      <Footer />

  </div>
  );
}

export default App;
