import React, { useState } from "react";
import "./slider.css";
const Slider = () => {


  const slides = [
    {
      url:"https://api.qfxcinemas.com/api/public/OneSheetPoster?eventId=7875",
      name:"creed iii"
    },
    {
      url:"https://api.qfxcinemas.com/api/public/OneSheetPoster?eventId=7871",
      name:"john wick"
    },
    {
      url:"https://api.qfxcinemas.com/api/public/OneSheetPoster?eventId=7831",
      name:"wakanda forever"
    },
    {
      url:"https://api.qfxcinemas.com/api/public/OneSheetPoster?eventId=7771",
      name:"laal singh chatda"
    },
    {
      url:"https://api.qfxcinemas.com/api/public/OneSheetPoster?eventId=7751",
      name:"thor"
    }
  ]

  const [index, setIndex]= useState(0)

  const prevSlide = () =>{
    const firstSlide = index ===0;
    const newSlide = firstSlide? slides.length -1 :index -1
    setIndex(newSlide)


  }
  const nextSlide = ()=>{
    const lastSlide = index === slides.length -1;
    const newSlide = lastSlide? 0 :index + 1
    setIndex(newSlide)

  }

  return (
    <div className="slider">
          <div className="center">
          <div className="icon">
            <img src="../../img/ico-movie.svg" alt="" />
            <span> Movies</span>
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
      <div className="container">
        <div className="imgSlider" style={{backgroundImage:`url(${slides[index].url})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
     
        </div>
        <div className="text1">
            <h1>{slides[index].name}</h1>
            <div className="icons">
                <div className="icon1">
                <img src="../../img/ico-ticket.svg" alt="" />
                <span> BUY TICKET </span>
                </div>
                <div className="icon1">
                <img src="../../img/play-icon.svg" alt="" />
                <span> PLAY TRAILER </span>
                </div>
                
            </div>
        </div>
        <div className="increase">
          <img onClick={nextSlide} src="../../img/arrow.png"/>
        </div>
        <div className="decrease">
          <img onClick={prevSlide}src="../../img/right-arrow.png"/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
