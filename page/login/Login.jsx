import React from "react";
import "./login.css";
import Partner from "../../components/partner/Partner";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <ScrollTicker />
      <Header />
      <div className="wrapper2">
        <h1> Login</h1>
        <form action="">
          <div className="inputForm">
            <img src="../../img/user1.svg" alt="" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="inputForm">
            <img src="../../img/@.png" alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </form>
        <button className="signup">login</button>
        <div className="forgotPass">
        <span>Reset/Forgot Password?</span>
      </div>
      <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="registerPage1">
          Don't have a QFX Account? Register here.
        </div>
      </Link>
      </div>
      
      <Partner />
      <Footer />
    </div>
  );
};

export default Login;
