import React, { useState } from "react";
import "./register.css";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import Partner from "../../components/partner/Partner";
import {auth,provider} from "../../components/firebase"
import { signInWithPopup} from "firebase/auth"
import n1 from "../../src/assets/img/user1.svg"
import n2 from "../../src/assets/img/phone.svg"
import n3 from "../../src/assets/img/email.svg"
import n4 from "../../src/assets/img/@.png"
import n5 from "../../src/assets/img/@.png"
import n6 from "../../src/assets/img/pin.svg"









const Register = () => {





  const signInWithGoogle =()=>{
   
    signInWithPopup(auth,provider).then((result)=>{
      console.log(result)
    }).catch((error)=>{console.log(error)})
  }




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
          <form >
            <div className="inputForm">
              <img src={n1} alt="" />
              <input type="text" placeholder="Name" 
              
              />
            </div>
            <div className="inputForm">
              <img src={n2} alt="" />
              <input type="text" placeholder="Mobile" />
            </div>
            <div className="inputForm">
              <img src={n3} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputForm">
              <img src={n4} alt="" />
              <input type="password" placeholder="Password" 
           
              />
            </div>
            <div className="inputForm">
              <img src={n5} alt="" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="inputForm">
              <img src={n6} alt="" />
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
            <span className="checkMark">
              <input type="checkbox" className="checks" />
            </span>
            <span>
              I have read and accepted the <a href="https://www.qfxcinemas.com/terms-of-use">Terms of Use</a> and  <a href="https://www.qfxcinemas.com/privacy">Privacy Policy</a> 
            </span>
          </div>
          <button className="signup" disabled={!veriy}>
            Sign up
          </button>
          <button onClick={signInWithGoogle}>
            Sign up with google
          </button>
        </div>
      </div>
      <Partner/>
      <Footer />
    </div>
  );
};

export default Register;
