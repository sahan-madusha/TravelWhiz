import './App.css';
import About from './components/aboutus/About';
import HeroSection from './components/heroSection/HeroSection';
import NavBar from './components/navBar/NavBar';
import PopularTrip from './components/populartrip/PopularTrip';
import Whatwedo from './components/whatWeDo/Whatwedo';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/footer/Footer';
import Profileform from './components/profilepage/Profileform';

function App() {
  return (
    <div>
      <NavBar/>

      {/* <HeroSection/>
      <About/>
      <PopularTrip/>
      <ContactUs/>
      <Whatwedo/> */}

      <Profileform/>
      <Footer/>
    </div>
  );
}

export default App;
