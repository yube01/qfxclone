import React, { useState } from 'react'
import "./scrolltiker.css"
import cross from "../../img/cross.png"

const ScrollTicker = () => {

  const [closeTicker , setCloseTicker] = useState(false)


  const handleClick = ()=>{
    setCloseTicker(true)
  }

  return (
    <div className="scroll">
        <div className="container">
            <marquee behavior="" direction="">
                <span className='text'>
                For any issues, please fill the form by clicking on the Support button on our App or website. We will get back to you shortly. For Customer Service, Call us at: 01-5522566
                </span>
                  
            </marquee>
          
           
        </div>
        <div className="img">
        <img src={cross} alt="" onClick={handleClick}/>
        </div>
      
     
    </div>
  )
}

export default ScrollTicker