import React from 'react'
import "./ContactUs.css"
import robo from "../../assets/AIROBO.png"
import inster from "../../assets/instagram 1.png"
import facebook from "../../assets/facebook 1.png"
import gmail from "../../assets/gmail (1) 1.png"
import linkedin from "../../assets/linkedin 1.png"

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
                <button>SEND</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolor provident aliquam minus nihil possimus hic ad, officia, 
                  pariatur earum tenetur corporis culpa voluptate ducimus saepe 
                  consequatur, doloremque accusamus soluta. Maxime?
                </p>          
            </div>
            <div className='social'>
                  <img src={facebook} alt='face'/>
                  <img src={inster} alt='inster'/>
                  <img src={gmail} alt='gmail'/>
                  <img src={linkedin} alt='linked'/>
            </div>  
        </div>
    </div>
  )
}

export default ContactUs