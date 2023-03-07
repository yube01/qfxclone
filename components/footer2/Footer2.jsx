import React from 'react'
import "./footer2.css"
const Footer2 = () => {
  return (
    <div className="footer2">
        <div className="top">
          <span>Privacy Policy</span>
          <span> Terms of Use</span>
          <div className="socialMedia">
          <img src="https://img.icons8.com/glyph-neue/64/000000/facebook.png"/>
          <img src="https://img.icons8.com/ios-glyphs/30/null/instagram-new.png"/>
          <img src="https://img.icons8.com/ios-glyphs/30/null/whatsapp.png"/>
          <img src="https://img.icons8.com/ios-glyphs/30/null/viber.png"/>
          </div>
        </div>
        <div className="bottom">
          <span className='border'>
            Copyright ©️ {new Date().getFullYear()} QFX Cinemas
          </span>
          <span className='border'>
            Designed by <a href="https://incs-work.com/" target='_blank'>INCS</a>
          </span>
          <span>
            Powered by <a href="https://www.amniltech.com/" target='_blank'>AMNIL Technologies Pvt Ltd.</a>
          </span>
        </div>
    </div>
  )
}

export default Footer2