import React from 'react'
import NavBar from '../navBar/NavBar'
import HeroSection from '../heroSection/HeroSection'
import About from '../aboutus/About'
import PopularTrip from '../populartrip/PopularTrip'
import ContactUs from '../contactus/ContactUs'
import Whatwedo from '../whatWeDo/Whatwedo'
import Footer from '../footer/Footer'
import SigninNotification from '../signinnotification/SigninNotification'

const FrontPage = (props) => {
  return (
    <div>
        {!props.show && props.tocreate && <SigninNotification setToCreate={props.setToCreate} setShow={props.setShow}/>}
        <NavBar tocreate={props.tocreate} setToCreate={props.setToCreate} show={props.show} setShow={props.setShow}/>
        <HeroSection/>
        <About/>
        <PopularTrip/>
        <ContactUs/>
        <Whatwedo/>
        <Footer/>
    </div>
  )
}

export default FrontPage