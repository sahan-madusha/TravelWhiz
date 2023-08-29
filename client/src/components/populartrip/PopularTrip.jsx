import React from 'react'
import "./PopularTrip.css"
import TripCard from './TripCard/TripCard'


const PopularTrip = () => {
  return (
    <div className='head'>
        <div className='description'>
            <h1>MOST POPULAR <span>TRIP</span></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur quasi a delectus quis distinctio. Illum cumque 
                necessitatibus alias velit quod, voluptas dolore impedit 
                amet nesciunt reiciendis qui nisi aut a!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur quasi a delectus quis distinctio. Illum cumque 
                necessitatibus alias velit quod, voluptas dolore impedit 
                amet nesciunt reiciendis qui nisi aut a!
            </p>
        </div>
        <div className='cards'>
            <TripCard/>
            <TripCard/>
            <TripCard/>
        </div>
    </div>
  )
}

export default PopularTrip