import React from 'react'
import "../poster/poster.css"

const comingPoster = ({futureShow}) => {
  return (
   <div className="mainPoster">
     <div className="poster">
      <div className="container">
        <div className="posterImg">
          <img src={futureShow.url} alt="" />
        
        </div>
        <div className="posterIcon">
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
       <h3>{futureShow.name}</h3>
       <h3>{futureShow.rated}</h3>
       <h3>{futureShow.date}</h3>
      </div>

   </div>
  )
}

export default comingPoster

