import './App.css';
import About from './components/aboutus/About';
import ContactUs from './components/contactus/ContactUs';
import NavBar from './components/navBar/NavBar';
import PopularTrip from './components/populartrip/PopularTrip';

function App() {
  return (
    <div>
      <NavBar/>
      <About/>
      <PopularTrip/>
      <ContactUs/>
    </div>
  );
}

export default App;
