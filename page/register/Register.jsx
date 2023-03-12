import React, { useState } from "react";
import "./register.css";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import Partner from "../../components/partner/Partner";
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
              <img src="../../img/user1.svg" alt="" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="inputForm">
              <img src="../../img/phone.svg" alt="" />
              <input type="text" placeholder="Mobile" />
            </div>
            <div className="inputForm">
              <img src="../../img/email.svg" alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputForm">
              <img src="../../img/@.png" alt="" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="inputForm">
              <img src="../../img/@.png" alt="" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="inputForm">
              <img src="../../img/pin.svg" alt="" />
              <select name="location" id="location">
              <option disabled value>
              --Select Location--
              </option>
              <option className="option1" value="Biratnagar">Biratnagar</option>
              <option className="option1" value="Birtamod">Birtamod</option>
              <option className="option1" value="Butwal">Butwal</option>
              <option className="option1" value="Damauli">Damauli</option>
              <option className="option1" value="Kathmandu Valley">Kathmandu Valley</option>
              <option className="option1" value="Narayanghat">Narayanghat</option>
              <option className="option1" value="Nepalgunj">Nepalgunj</option>
            </select>
            </div>
          </form>
          
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
          <button className="signup" disabled={!veriy}>
            Sign up
          </button>
        </div>
      </div>
      <Partner/>
      <Footer />
    </div>
  );
};

export default Register;
