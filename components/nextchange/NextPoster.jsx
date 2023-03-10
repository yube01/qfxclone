import React, { useState } from 'react'
import "../poster/poster.css"
import TrailerNext from './TrailerNext'

const NextPoster = ({nextShow}) => {

  const [openTrailer, setOpenTrailer] = useState(false)
  return (
    <div className="trailerPage">
       {openTrailer &&
      <TrailerNext nextShow={nextShow} setOpenTrailer={setOpenTrailer} openTrailer={openTrailer}/>
      }
      <div className="mainPoster">
      <div className="poster">
      <div className="container">
        <div className="posterImg">
          <img src={nextShow.url} alt="" />
        
        </div>
        <div className="posterIcon">
        <div className="icons">
                <div className="icon2">
                <img src="../../img/ico-ticket.svg" alt="" />
                <span> Buy Ticket </span>
                </div>
                <div className="icon2" onClick={()=>{setOpenTrailer(!openTrailer)}} >
                <img src="../../img/play-icon.svg" alt="" />
                <span> Play Trailer </span>
                </div>
                
            </div>
        </div>
        
      </div>
    </div>
    <div className="title">
       <h3>{nextShow.name}</h3>
       <h3>{nextShow.rated}</h3>
      </div>
    </div>
    </div>
  )
}

export default NextPoster

