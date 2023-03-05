import React from "react";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import NowShowing from "../../components/nowshowing/NowShowing";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <ScrollTicker />
      <Header />
      <Slider />

      <div className="shows">
      <h1>NOW SHOWING</h1>
      <NowShowing />

      </div>
    

 
    </div>
  );
};

export default Home;
