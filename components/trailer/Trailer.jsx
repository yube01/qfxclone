import React from "react";
import "./trailer.css";
import t4 from "../../src/assets/img/ico-ticket.svg"
const Trailer = ({nowShow,setOpenTrailer,openTrailer}) => {
   
   
  return (
    <>
    {openTrailer?
    <div className="trailer">
    <div className="container">
      <div className="lefts">
        <iframe
          width="560"
          height="315"
          src={nowShow.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        
      </div>
      <div className="rights">
        <div className="first">
          <div className="title">
            <span> {nowShow.name}</span>
            <span>{nowShow.rated}</span>
          </div>
          <div className="icon4">
            <img src={t4} alt="" />
            <span> Buy Ticket </span>
          </div>
        </div>
        <div className="movieDetails">
          <p>
            <strong>Genre:</strong> {nowShow.genre} </p>
          <p>
            <strong>Run time:</strong> {nowShow.runtime}
          </p>
          <p>
            <strong>Director:</strong> {nowShow.director}
          </p>
          <p>
            <strong>Cast:</strong> {nowShow.cast}
          </p>
          <p>
            <strong>Language:</strong> {nowShow.language}
          </p>
        </div>
        <div className="description">
          <p>
            <strong>SYNOPSIS: </strong>
            <br />
            <span className="mp">{nowShow.synopsis}</span>
          </p>
        </div>
        <button onClick={()=>{
          setOpenTrailer(!openTrailer)
        }}
         >
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
