import './App.css';
import About from './components/aboutus/About';
import HeroSection from './components/heroSection/HeroSection';
import NavBar from './components/navBar/NavBar';
import PopularTrip from './components/populartrip/PopularTrip';
import Whatwedo from './components/whatWeDo/Whatwedo';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <About/>
      <PopularTrip/>
      <ContactUs/>
      <Whatwedo/>
      <Footer/>
    </div>
  );
}

export default App;
