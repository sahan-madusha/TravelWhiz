import React from 'react'
import "./ContactUs.css"
import robo from "../../assets/AIROBO.png"

const ContactUs = () => {
  return (
    <div className='contactmain'>
        <div className='imageContent'>
            <h2>CONTACT <span>US</span></h2>
            <img src={robo} alt='robo'/>
        </div>
        <div className='contactDetails'>
            <div className='filling'>
                <input id='input1' type='text' placeholder='Enter your Email'/>
                <input id='input2' type='text' placeholder='Enter your message here'/>
                <butto>SEND</butto>
            </div>
            <div className='social'></div>
        </div>
    </div>
  )
}

export default ContactUs