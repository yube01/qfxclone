import React from "react";
import "../../components/trailer/trailer.css";

const Trailer = ({nextComingShow,setOpenTrailer,openTrailer}) => {
   
   
  return (
    <>
    {openTrailer?
    <div className="trailer">
    <div className="container">
      <div className="lefts">
        <iframe
          width="560"
          height="315"
          src={nextComingShow.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        
      </div>
      <div className="rights">
        <div className="first">
          <div className="title">
            <span> {nextComingShow.name}</span>
            <span>{nextComingShow.rated}</span>
          </div>
         
        </div>
        <div className="movieDetails">
          <p>
            <strong>Genre:</strong> {nextComingShow.genre} </p>
          <p>
            <strong>Run time:</strong> {nextComingShow.runtime}
          </p>
          <p>
            <strong>Director:</strong> {nextComingShow.director}
          </p>
          <p>
            <strong>Cast:</strong> {nextComingShow.cast}
          </p>
          <p>
            <strong>Language:</strong> {nextComingShow.language}
          </p>
        </div>
        <div className="description">
          <p>
            <strong>SYNOPSIS: </strong>
            <br />
            <span className="mp">{nextComingShow.synopsis}</span>
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
