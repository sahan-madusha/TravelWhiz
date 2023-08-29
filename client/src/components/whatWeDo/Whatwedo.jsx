import React from 'react'
import './Whatwedo.css'

import pic1 from "../../assets/ai.jpg";

import icon1 from "../../assets/tagged.png";
import icon2 from "../../assets/download (1).png";
import icon3 from "../../assets/google-maps.png";
import icon4 from "../../assets/destination.png";


function Whatwedo() {
    return (
        <div className='main container my-5'>
            <div class="row d-flex align-items-center">

                <div className='sub content col-12 col-lg-8 text-center mt-4'>
                    <h1>WHAT WE <span class="text-success">DO ?</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam officia fugit amet eum obcaecati laborum ad cumque! Error tenetur dolorem
                        praesentium quasi illum officia. Ipsam laboriosam illo quidem hic adipisci?

                    </p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam officia fugit amet eum obcaecati laborum ad cumque! Error tenetur dolorem
                        praesentium quasi illum officia. Ipsam laboriosam illo quidem hic adipisci?</p>

                    <div class="d-flex flex-row">
                    <img className='picture wwd-icon border border-0 rounded' src={icon1} alt='logo' />
                    <img className='picture wwd-icon border border-0 rounded' src={icon2} alt='logo' />
                    <img className='picture wwd-icon border border-0 rounded' src={icon3} alt='logo' />
                    <img className='picture wwd-icon border border-0 rounded' src={icon4} alt='logo' />
                    </div>

                </div>

                <div className='pictures col-12 col-lg-4 mt-4 '>
                    <img className='picture picture1 ' class=" w-100 border border-0 rounded" src={pic1} alt='logo' />
                </div>

            </div>
        </div>
    )
}

export default Whatwedo