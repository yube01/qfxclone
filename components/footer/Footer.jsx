import React from 'react'
import "./footer.css"
import Footer2 from '../footer2/Footer2'
import Google from "../../src/assets/img/qfx-google-play.png"
import G1 from "../../src/assets/img/qfx-ios-store.png"
import Playstore from "../../src/assets/img/googleplay.png"
import p1 from "../../src/assets/img/appstore.png"
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="mainTitle">
                <h1>OUR COMPANY</h1>
                <ul>
                    <li>Our Story</li>
                    <li>Our Brand</li>
                    <li>Corporate Info</li>
                    <li>Careers</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="mainTitle">
            <h1>OUR SERVICES</h1>
                <ul>
                    <li>Film Festivals</li>
                    <li>Special Screenings</li>
                    <li>Tickets Vouchers</li>
                    
                    <li>Advertise With Us </li>
                </ul>
            </div>
            <div className="mainTitle">
            <h1>OUR CINEMAS</h1>
                <ul>
                    <li>Cinemas</li>
                    <li>Contact Us</li>
                    <li>Your Feedback Here</li>
                    <li>Become QFX Franchise</li>
                   
                   
                </ul>
            </div>
            <div className="mainTitle">
            <h1>MORE</h1>
                <ul>
                    <li>Goji Loyality Overview</li>
                    <li>Sync Your Accounts</li>
                    <li>Offers & Promotion</li>
                    <li>Gift Cards</li>
                    
                </ul>
                <div className="qrCode">
                    <div className="big">
                        <a href="https://play.google.com/store/apps/details?id=com.exolutus.qfxcinemas&hl=en" target="_blank" rel="noopener noreferrer">   <img src={Google} alt="" /></a>
                        <a href="https://apps.apple.com/np/app/qfx-cinema/id1092931043" target="_blank" rel="noopener noreferrer"><img src={G1} alt="" /></a>
                        
                       
                    </div>
                    <div className="small">
                        <a href="https://play.google.com/store/apps/details?id=com.exolutus.qfxcinemas&hl=en" target="_blank" rel="noopener noreferrer"> <img src={Playstore} alt="" /></a>
                        <a href="https://apps.apple.com/np/app/qfx-cinema/id1092931043" target="_blank" rel="noopener noreferrer"><img src={p1} alt="" /></a>
                        
                     
                    </div>
                </div>
            </div>
        </div>
        <Footer2/>
    </div>
  )
}

export default Footer