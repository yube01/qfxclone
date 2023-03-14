import React, { useState } from "react";
import "./slider.css";
import m1 from "../../src/assets/img/ico-movie.svg"
import l1 from "../../src/assets/img/ico-cinema.svg"
import t1 from "../../src/assets/img/ico-ticket.svg"
import l2 from "../../src/assets/img/ico-loyalty.svg"
import s1 from "../../src/assets/img/ico-support.svg"
import { Link } from "react-router-dom";
import d1 from "../../src/assets/img/ico-ticket.svg"
import d2 from "../../src/assets/img/play-icon.svg"
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
          <Link to="/" style={{textDecoration:"none"}}>
          <div className="icon">
            <img src={m1} alt="" />
            <span> Movies</span>
          </div>
          </Link>
          <div className="icon">
            <img src={l1} alt="" />
            <span> Locations</span>
          </div>
          <div className="icon">
            <img src={t1} alt="" />
            <span> My Tickets</span>
          </div>
          <div className="icon">
            <img src={l2} alt="" />
            <span> My Loyality</span>
          </div>
          <div className="icon">
            <img src={s1} alt="" />
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
                <img src={d1} alt="" />
                <span> BUY TICKET </span>
                </div>
                <div className="icon1">
                <img src={d2} alt="" />
                <span> PLAY TRAILER </span>
                </div>
                
            </div>
        </div>
        <div className="increase">
          <img onClick={nextSlide} src="../../src/assets/img/arrow.png"/>
        </div>
        <div className="decrease">
          <img onClick={prevSlide}src="../../src/assets/img/right-arrow.png"/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
