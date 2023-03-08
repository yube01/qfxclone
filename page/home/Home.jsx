import React from "react";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import NowShowing from "../../components/nowshowing/NowShowing";
import "./home.css";
import NextChange from "../../components/nextchange/NextChange";
import ComingSoon from "../../components/comingSoon/ComingSoon";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

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
      <div className="shows">
        <h1>NEXT CHANGE</h1>
        <NextChange />
      </div>
      <div className="shows">
        <h1>COMING SOON</h1>
        <ComingSoon />
       
      </div>
      
      <Link to="/coming-soom" style={{textDecoration:"none"}}>
      <div className="viewAll">
          <h1>VIEW ALL</h1>
          <span class="material-symbols-outlined">trending_flat</span>
        </div>
      </Link>
        <div className="foots">
        <Partner/>
        <Footer/>
        </div>
       
    </div>
  );
};

export default Home;
