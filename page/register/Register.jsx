import React from 'react'
import "./register.css"
import ScrollTicker from '../../components/scrollticker/ScrollTicker'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
const Register = () => {
  return (
   <div className="register">
    <ScrollTicker/>
    <Header/>
    <div className="registerPage">
      page
    </div>
    <Footer/>
   </div>
  )
}

export default Register