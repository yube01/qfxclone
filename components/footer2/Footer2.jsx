import React from 'react'
import "./footer2.css"
const Footer2 = () => {
  return (
    <div className="footer2">
        <div className="top">
          <span>Privacy Policy</span>
          <span> Terms of Use</span>
          <div className="socialMedia">
            <a href="https://www.facebook.com/qfxcinemasnepal/" target='_blank'><img src="https://img.icons8.com/glyph-neue/64/000000/facebook.png"/></a>
            <a href="https://www.instagram.com/qfxcinemas_official/" target='_blank'> <img src="https://img.icons8.com/ios-glyphs/30/null/instagram-new.png"/></a>
            <a href="https://api.whatsapp.com/send?phone=9779813876466" target='_blank'><img src="https://img.icons8.com/ios-glyphs/30/null/whatsapp.png"/></a>
            <a href="viber://chat?number=9779813876466" target='_blank'><img src="https://img.icons8.com/ios-glyphs/30/null/viber.png"/></a>

         
     
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