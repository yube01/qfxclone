import React, { useState } from 'react'
import "./poster.css"
import Trailer from "../trailer/Trailer"


const Poster = ({nowShow}) => {

  const [openTrailer, setOpenTrailer] = useState(true)
  

  
  return (
   
     <div className="trailerPage">
      {openTrailer &&
      <Trailer nowShow={nowShow}/>
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
      <h3>{nowShow.name}</h3>
      <h3>{nowShow.rated}</h3>
     </div>

   </div>
     </div>
  
    
   
    
  )
}

export default Poster

