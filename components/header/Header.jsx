import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import qfx from "../../src/assets/img/logo.svg"
import m1 from "../../src/assets/img/ico-movie.svg"
import l1 from "../../src/assets/img/ico-cinema.svg"
import t1 from "../../src/assets/img/ico-ticket.svg"
import l2 from "../../src/assets/img/ico-loyalty.svg"
import s1 from "../../src/assets/img/ico-support.svg"
import l3 from "../../src/assets/img/login-ico.png"
import r1 from "../../src/assets/img/register (1).png"
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
        <div className="left">
          <img src={qfx} alt="" />
        </div>
        </Link>
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
        <div className="right">
          <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>
          <span> Login </span>
          </Link>
        <Link to="/register" style={{textDecoration:"none",color:"inherit"}}>
        <span> Register </span>
        </Link>
        </div>
        <div className="right2">
          <img src={l3} alt="" />
          <img src={r1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
