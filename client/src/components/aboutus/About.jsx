import React from 'react'
import "./About.css"
import pic1 from "../../assets/aboutus.png";


const About = () => {
    return (
        <div className='main container my-5'>
            <div class="row d-flex align-items-center">
                <div className='pictures col-12 col-lg-4 mt-4'>
                    <img className='picture picture1 w-100' src={pic1} alt='logo' />
                </div>
                <div className='sub content col-12 col-lg-8 text-center mt-4'>
                    <h1>ABOUT <span class="text-success"> US</span></h1>
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
        </div>
    )
}

export default About