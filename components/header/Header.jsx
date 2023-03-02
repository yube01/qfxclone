import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="left">
              <img src="../../img/logo.svg" alt="" />
            </div>
            <div className="center">
              <div className="icon">
                <img src="../../img/ico-movie.svg" alt="" />
                <span> Movie</span>
              </div>
              <div className="icon">
                <img src="../../img/ico-cinema.svg" alt="" />
                <span> Locations</span>
              </div>
              <div className="icon">
                <img src="../../img/ico-ticket.svg" alt="" />
                <span> My Tickets</span>
              </div>
              <div className="icon">
                <img src="../../img/ico-loyalty.svg" alt="" />
                <span> My Loyality</span>
              </div>
              <div className="icon">
                <img src="../../img/ico-support.svg" alt="" />
                <span> Support</span>
              </div>
            </div>
            <div className="right">
              <span>   Login </span>
              <span> Register </span>
              
            </div>
        </div>
    </div>
  )
}

export default Header