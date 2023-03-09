import React from 'react'
import "./poster1.css"

const comingPoster = ({nextComingShow}) => {
  return (
   <div className="mainPoster1">
     <div className="poster1">
      <div className="container">
        <div className="posterImg1">
          <img src={nextComingShow.url} alt="" />
        
        </div>
        <div className="posterIcon2">
        <div className="icons">
             
                <div className="icon2">
                <img src="../../img/play-icon.svg" alt="" />
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
  )
}

export default comingPoster

