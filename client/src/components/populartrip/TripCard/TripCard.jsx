import React from 'react'
import "./TripCard.css"
import mainGirl from "../../../assets/maingirl.png"
import subtrain from "../../../assets/subtrain.png"
import subhouse from "../../../assets/subhouse.png"
import subback from "../../../assets/subback.png"

const TripCard = (props) => {
  return (
    <div className='cardCover'>
        <div className='imageContainer'>
            <div className='mainImage'>
                <img src={mainGirl} alt='gitl'/>
            </div>
            <div className='subImages'>
                <img src={subtrain} alt='train'/>
                <img src={subhouse} alt='house'/>
                <img src={subback} alt='back'/>
            </div>
        </div>
        <div className='descrip'>
            <h3>ELLA-BADULLA</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. A error voluptas, minus et illum aliquid, ea 
                quod. elit. A error voluptas, minus et illum aliquid, ea 
                quod. 
            </p>
        </div>
    </div>
  )
}

export default TripCard