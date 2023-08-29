import React from 'react'
import "./About.css"
import  pic1 from "../../assets/4356_BfrkPvyx 1.jpg";
import  pic2 from "../../assets/How-long-to-spend-in-Sri-Lanka-2 1.png";
import  pic3 from "../../assets/Sri-Lanka-Train-ride-blue-photos-1024x683 1.jpg";

const About = () => {
  return (
    <div className='main'>
        <div className='sub pictures'>
            <img className='picture picture1' src={pic1} alt='logo'/>
            <img className='picture picture2' src={pic2} alt='logo'/>
            <img className='picture picture3' src={pic3} alt='logo'/>
        </div>
        <div className='sub content'>
            <h1>ABOUT <p> US</p></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam officia fugit amet eum obcaecati laborum ad cumque! Error tenetur dolorem 
                praesentium quasi illum officia. Ipsam laboriosam illo quidem hic adipisci?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam officia fugit amet eum obcaecati laborum ad cumque! Error tenetur dolorem 
                praesentium quasi illum officia. Ipsam laboriosam illo quidem hic adipisci?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam officia fugit amet eum obcaecati laborum ad cumque! Error tenetur dolorem 
                praesentium quasi illum officia. Ipsam laboriosam illo quidem hic adipisci?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam officia fugit amet eum obcaecati laborum ad cumque! Error tenetur dolorem 
                praesentium quasi illum officia. Ipsam laboriosam illo quidem hic adipisci?
            </p>

        </div>
    </div>
  )
}

export default About