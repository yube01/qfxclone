import React from "react";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import "./policy.css";
const Policy = () => {
  return (
    <div className="policy">
      <ScrollTicker />
      <Header />
      <Partner />
      <Footer />
    </div>
  );
};

export default Policy;
