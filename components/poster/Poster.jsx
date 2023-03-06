import React from 'react'
import "./poster.css"

const Poster = ({nowShow}) => {
  return (
    <div className="mainPoster">
      <div className="poster">
      <div className="container">
        <div className="posterImg">
          <img src={nowShow.url} alt="" />
        
        </div>
        <div className="posterIcon">
        <div className="icons">
                <div className="icon2">
                <img src="../../img/ico-ticket.svg" alt="" />
                <span> Buy Ticket </span>
                </div>
                <div className="icon2">
                <img src="../../img/play-icon.svg" alt="" />
                <span> Play Trailer </span>
                </div>
                
            </div>
        </div>
       
        
      </div>
    
   
     
    </div>
    <div className="title">
       <h3>{nowShow.name}</h3>
       <h3>{nowShow.rated}</h3>
      </div>

    </div>
    
  )
}

export default Poster

