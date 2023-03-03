import React, { useState } from "react";
import "./slider.css";
const Slider = () => {


  const slides = [
    {
      url:"https://api.qfxcinemas.com/api/public/OneSheetPoster?eventId=7875"
    },
    {
      url:"https://api.qfxcinemas.com/api/public/OneSheetPoster?eventId=7871"
    }
  ]

  const [index, setIndex]= useState(0)

  const prevSlide = () =>{
    const firstSlide = index ===0;
    const newSlide = firstSlide? slides.length -2 :index -1
    setIndex(newSlide)


  }
  const nextSlide = ()=>{
    const lastSlide = index === slides.length -1;
    const newSlide = lastSlide? 0 :index + 1
    setIndex(newSlide)

  }

  return (
    <div className="slider">
      <div className="container">
        <div className="imgSlider" style={{backgroundImage:`url(${slides[index].url})`}}>
         
        </div>
        <div className="text1">
            <h1>CHAKKA PANJA 4</h1>
            <div className="icons">
                <div className="icon">
                <img src="../../img/ico-ticket.svg" alt="" />
                <span> BUY TICKET </span>
                </div>
                <div className="icon">
                <img src="../../img/play-icon.svg" alt="" />
                <span> PLAY TRAILER </span>
                </div>
                
            </div>
        </div>
        <div className="increase">
          <h1 onClick={nextSlide}>+</h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
