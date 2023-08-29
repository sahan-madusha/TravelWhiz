import './App.css';
import About from './components/aboutus/About';

import ContactUs from './components/contactus/ContactUs';
import NavBar from './components/navBar/NavBar';
import PopularTrip from './components/populartrip/PopularTrip';
import HeroSection from './components/heroSection/HeroSection';
import Whatwedo from './components/whatWeDo/Whatwedo';


function App() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <About/>
      <PopularTrip/>
      <ContactUs/>
      <Whatwedo/>
    </div>
  );
}

export default App;
