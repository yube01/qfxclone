import React, { useState } from "react";
import "./trailer.css";

const Trailer = () => {
    const [closeTrailer, setCloseTrailer] = useState(false)
  return (
    <>
    {!closeTrailer?
    <div className="trailer">
    <div className="container">
      <div className="lefts">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V3tEPolMPKQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="rights">
        <div className="first">
          <div className="title">
            <span> chhakka panja 4 </span>
            <span>(U)</span>
          </div>
          <div className="icon2">
            <img src="../../img/ico-ticket.svg" alt="" />
            <span> Buy Ticket </span>
          </div>
        </div>
        <div className="movieDetails">
          <p>
            <strong>Genre:</strong> Comedy, Drama
          </p>
          <p>
            <strong>Run time:</strong> 2hrs 32min
          </p>
          <p>
            <strong>Director:</strong> Hem Raj BC
          </p>
          <p>
            <strong>Cast:</strong> Deepak Raj Giri, Deepa Shree Niraula, Kedar
            Ghimire
          </p>
          <p>
            <strong>Language:</strong> Nepali
          </p>
        </div>
        <div className="description">
          <p>
            <strong>SYNOPSIS: </strong>
            <br /> Chhakka Panja 4 is a comedy drama movie starring Deepak Raj
            Giri, Dipaa Shree Niroula, Nirmal Sharma, Buddhi Tamang, Raj
            Acharya, Bedana Rai, Sushma Niraula and directed by Hemraj B.C.{" "}
          </p>
        </div>
        <button onClick={()=>{
          setCloseTrailer(!closeTrailer)
        }} >
          Close
        </button>
      </div>
    </div>
  </div>:
  <></>
  }
    </>
  );
};

export default Trailer;
