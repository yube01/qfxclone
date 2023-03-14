import React, { useState } from 'react'
import "./poster.css"
import Trailer from "../trailer/Trailer"
import buy from "../../src/assets/img/ico-ticket.svg"
import trai from "../../src/assets/img/play-icon.svg"

const Poster = ({nowShow}) => {

  const [openTrailer, setOpenTrailer] = useState(false)
  

  
  return (
   
     <div className="trailerPage">
      {openTrailer &&
      <Trailer nowShow={nowShow} setOpenTrailer={setOpenTrailer} openTrailer={openTrailer}/>
      }
      <div className="mainPoster">
     <div className="poster">
     <div className="container">
       <div className="posterImg">
         <img src={nowShow.url} alt="" />
       
       </div>
       <div className="posterIcon">
       <div className="icons">
               <div className="icon2">
               <img src={buy} alt="" />
               <span> Buy Ticket </span>
               </div>
               <div className="icon2" onClick={()=>{setOpenTrailer(!openTrailer)}} >
               <img src={trai} alt="" />
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
     </div>
  
    
   
    
  )
}

export default Poster

