import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection.jsx';
import Destinations from './Components/HeroSection/Destinations/Destinations';
import AboutUs from './Components/AboutUs/AboutUs';



function App() {
  return (
    <div className="App">
    
      <HeroSection />

      <Destinations />

      <AboutUs />
      
  </div>
  );
}

export default App;
