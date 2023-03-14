import React, { useState } from 'react'
import "./poster1.css"
import TrailerSoonNext from "./TrailerSoonNext"
import p6 from "../../src/assets/img/play-icon.svg"
const comingPoster = ({nextComingShow}) => {
  const [openTrailer, setOpenTrailer] = useState(false)
  

  return (
   <div className="trailerPage">
    {openTrailer &&
      <TrailerSoonNext nextComingShow={nextComingShow} setOpenTrailer={setOpenTrailer} openTrailer={openTrailer}/>
      }
    <div className="mainPoster1">
     <div className="poster1">
      <div className="container">
        <div className="posterImg1">
          <img src={nextComingShow.url} alt="" />
        
        </div>
        <div className="posterIcon2">
        <div className="icons">
             
                <div className="icon2" onClick={()=>{setOpenTrailer(!openTrailer)}}>
                <img src={p6} alt="" />
                <span> Play Trailer </span>
                </div>
                
            </div>
        </div>
        
      </div>
    </div>
    <div className="title">
       <h3>{nextComingShow.name}</h3>
       <h3>{nextComingShow.rated}</h3>
       <h3>{nextComingShow.date}</h3>
      </div>

   </div>
   </div>
  )
}

export default comingPoster

