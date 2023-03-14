import React, { useState } from 'react'
import "../poster/poster.css"
import TrailerSoon from "./TrailerSoon"
import Play from "../../src/assets/img/play-icon.svg"
const comingPoster = ({futureShow}) => {
  
  const [openTrailer, setOpenTrailer] = useState(false)
  return (
   <div className="trailerPage">
     {openTrailer &&
      <TrailerSoon futureShow={futureShow} setOpenTrailer={setOpenTrailer} openTrailer={openTrailer}/>
      }
    <div className="mainPoster">
     <div className="poster">
      <div className="container">
        <div className="posterImg">
          <img src={futureShow.url} alt="" />
        
        </div>
        <div className="posterIcon">
        <div className="icons">
             
                <div className="icon2" onClick={()=>{setOpenTrailer(!openTrailer)}} >
                <img src={Play} alt="" />
                <span> Play Trailer </span>
                </div>
                
            </div>
        </div>
        
      </div>
    </div>
    <div className="title">
       <h3>{futureShow.name}</h3>
       <h3>{futureShow.rated}</h3>
       <h3>{futureShow.date}</h3>
      </div>

   </div>
   </div>
  )
}

export default comingPoster

