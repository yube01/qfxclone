import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/home">
        <div className="left">
          <img src="../../img/logo.svg" alt="" />
        </div>
        </Link>
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
        <div className="right">
          <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>
          <span> Login </span>
          </Link>
        <Link to="/register" style={{textDecoration:"none",color:"inherit"}}>
        <span> Register </span>
        </Link>
        </div>
        <div className="right2">
          <img src="../../img/login-ico.png" alt="" />
          <img src="../../img/register (1).png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
