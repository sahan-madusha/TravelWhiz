import React from 'react'
import "./Footer.css"
import facebook from "../../assets/facebook 1.png"
import gmail from "../../assets/gmail (1) 1.png"
import inster from "../../assets/instagram 1.png"
import linkedin from "../../assets/linkedin 1.png"

const Footer = () => {
  return (
    <div className='footermain'>
        <div className='subs'>
            <h2>OUR <span>VISION</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facilis, maiores et? Inventore, voluptatem repudiandae, 
                quia exercitationem excepturi quaerat qui tempora totam 
                placeat alias libero dicta quo labore sint quibusdam possimus?
            </p>
        </div>
        <div className='subs'>
            <h2>USEFULL <span>LINKS</span></h2>
            Home<br/>Profile<br/>About Us<br/>What we do<br/>Plan my trip<br/>How to use website?
        </div>
        <div className='subs'>
            <h2>CONTACT <span>US</span><br/>TravelWhiz.lk</h2>
            <p>Loremimpedit voluptatem. Non fugiat inventore repellat 
                deserunt, sapiente excepturi alias.
            </p>
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
            <img src={inster} alt="" />
            <img src={gmail} alt="" />
        </div>
    </div>
  )
}

export default Footer