import React, { useState } from "react";
import "./login.css";
import Partner from "../../components/partner/Partner";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../components/firebase"
import o1 from "../../src/assets/img/user1.svg"
import o2 from "../../src/assets/img/@.png"
const Login = () => {


  const signIn =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((result)=>{
      console.log(result)
    }).catch((error)=>{console.log(error)})

  }

  const[email,setEmail]= useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="login">
      <ScrollTicker />
      <Header />
      <div className="wrapper2">
        <h1> Login</h1>
        <form onSubmit={signIn}>
          <div className="inputForm">
            <img src={o1} alt="" />
            <input type="text" placeholder="Name"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="inputForm">
            <img src={o2} alt="" />
            <input type="password" placeholder="Password"
            value={password} 
            
            onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="inputForm">
            
          <input type="submit" value="login" className="submit1" />
            
          </div>

        </form>
        
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
