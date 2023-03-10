import React from "react";
import "../trailer/trailer.css";

const Trailer = ({futureShow,setOpenTrailer,openTrailer}) => {
   
   
  return (
    <>
    {openTrailer?
    <div className="trailer">
    <div className="container">
      <div className="lefts">
        <iframe
          width="560"
          height="315"
          src={futureShow.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        
      </div>
      <div className="rights">
        <div className="first">
          <div className="title">
            <span> {futureShow.name}</span>
            <span>{futureShow.rated}</span>
          </div>
         
        </div>
        <div className="movieDetails">
          <p>
            <strong>Genre:</strong> {futureShow.genre} </p>
          <p>
            <strong>Run time:</strong> {futureShow.runtime}
          </p>
          <p>
            <strong>Director:</strong> {futureShow.director}
          </p>
          <p>
            <strong>Cast:</strong> {futureShow.cast}
          </p>
          <p>
            <strong>Language:</strong> {futureShow.language}
          </p>
        </div>
        <div className="description">
          <p>
            <strong>SYNOPSIS: </strong>
            <br />
            <span className="mp">{futureShow.synopsis}</span>
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
