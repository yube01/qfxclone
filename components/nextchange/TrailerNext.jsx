import React from "react";
import "../trailer/trailer.css";

const Trailer = ({nextShow,setOpenTrailer,openTrailer}) => {
   
   
  return (
    <>
    {openTrailer?
    <div className="trailer">
    <div className="container">
      <div className="lefts">
        <iframe
          width="560"
          height="315"
          src={nextShow.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        
      </div>
      <div className="rights">
        <div className="first">
          <div className="title">
            <span> {nextShow.name}</span>
            <span>{nextShow.rated}</span>
          </div>
          <div className="icon4">
            <img src="../../img/ico-ticket.svg" alt="" />
            <span> Buy Ticket </span>
          </div>
        </div>
        <div className="movieDetails">
          <p>
            <strong>Genre:</strong> {nextShow.genre} </p>
          <p>
            <strong>Run time:</strong> {nextShow.runtime}
          </p>
          <p>
            <strong>Director:</strong> {nextShow.director}
          </p>
          <p>
            <strong>Cast:</strong> {nextShow.cast}
          </p>
          <p>
            <strong>Language:</strong> {nextShow.language}
          </p>
        </div>
        <div className="description">
          <p>
            <strong>SYNOPSIS: </strong>
            <br />
            <span className="mp">{nextShow.synopsis}</span>
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
