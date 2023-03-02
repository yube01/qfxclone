import React from "react";
import "./slider.css";
const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="imgSlider">
          <img src="../../img/mov1.jfif" alt="" />
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
