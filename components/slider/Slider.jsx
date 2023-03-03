import React, { useState } from "react";
import "./slider.css";
const Slider = () => {


  const slides = [
    {
      url:"https://api.qfxcinemas.com/api/public/OneSheetPoster?eventId=7875"
    },
    {
      url:"https://api.qfxcinemas.com/api/public/OneSheetPoster?eventId=7875"
    }
  ]

  const [index, setIndex]= useState(0)

  return (
    <div className="slider">
      <div className="container">
        <div className="imgSlider" style={{backgroundImage:`url(${slides[0].url})`}}>
         
        </div>
        <div className="text">
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
      </div>
    </div>
  );
};

export default Slider;
