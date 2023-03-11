import React, { useState } from "react";
import "./register.css";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
const Register = () => {
  const [veriy, setVerify] = useState(false)
  const onChange=(value) =>{
    console.log("Captcha value:", value);
    setVerify(true)
    
  }
  return (
    <div className="register">
      <ScrollTicker />
      <Header />
      <div className="registerPage">
        <div className="wrapper1">
          <h1> Register</h1>
          <form action="">
            <div className="inputForm">
              <img src="" alt="" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="inputForm">
              <img src="" alt="" />
              <input type="text" placeholder="Mobile" />
            </div>
            <div className="inputForm">
              <img src="" alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputForm">
              <img src="" alt="" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="inputForm">
              <img src="" alt="" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="inputForm">
              <img src="" alt="" />
              <input type="text" placeholder="Name" />
            </div>
          </form>
          <div className="location">
            <select name="location" id="location">
              <option disabled value>
                Loaction
              </option>
              <option value="Biratnagar">Biratnagar</option>
              <option value="Birtamod">Birtamod</option>
              <option value="Butwal">Butwal</option>
              <option value="Damauli">Damauli</option>
              <option value="Kathmandu Valley">Kathmandu Valley</option>
              <option value="Narayanghat">Narayanghat</option>
              <option value="Nepalgunj">Nepalgunj</option>
            </select>
          </div>
          <div className="recapcha">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>
          <div className="policyTerms">
            <span className="checkMark"></span>
            <span>
              I have read and accepted the Terms of Use and Privacy Policy
            </span>
          </div>
          <button className="signup" disabled={!veriy}></button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
