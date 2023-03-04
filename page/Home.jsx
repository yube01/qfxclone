import React from 'react'
import ScrollTicker from '../components/scrollticker/ScrollTicker'
import Header from '../components/header/Header'
import Slider from '../components/slider/Slider'
const Home = () => {
  return (
    <div>
        <ScrollTicker/>
        <Header/>
        <Slider/>
        <h1>
          NOW SHOWING
        </h1>
    </div>
  )
}

export default Home