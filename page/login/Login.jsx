import React from "react";
import "./login.css";
import Partner from "../../components/partner/Partner";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
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
            <img src="../../img/user1.svg" alt="" />
            <input type="text" placeholder="Name"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="inputForm">
            <img src="../../img/@.png" alt="" />
            <input type="password" placeholder="Password"
            value={password} 
            
            onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <input type="submit" />
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
