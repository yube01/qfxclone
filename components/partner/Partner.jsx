import React from 'react'
import "./partner.css"
import k1 from "../../src/assets/img/khalti-logo.svg"
const Partner = () => {
  return (
    <div className="partner">
        <h1>
            OUR PREFERRED PARTNERS
        </h1>
        <a href="https://khalti.com/" target="_blank" rel="noopener noreferrer"><img src={k1} alt="" /></a>
        
        <span>
            PAYMENT PARTNER
        </span>
    </div>
  )
}

export default Partner