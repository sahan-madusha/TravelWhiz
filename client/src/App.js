import './App.css';
import About from './components/aboutus/About';
import HeroSection from './components/heroSection/HeroSection';
import NavBar from './components/navBar/NavBar';
import Whatwedo from './components/whatWeDo/Whatwedo';

function App() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Whatwedo/>
    </div>
  );
}

export default App;
