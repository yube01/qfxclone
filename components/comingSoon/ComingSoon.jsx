import React from 'react'
import "./comingsoon.css"
import ComingPoster from './ComingPoster'

const ComingSoon = () => {
    const comingShows = [
        {
          id:1,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7861",
          trailer:"",
          name:"TU JHOOTI MAIN MAKKARR",
          rated:"(PG)",
          date:"8 MARCH 2023"

        },
        {
          id:2,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7871",
          trailer:"",
          name:"JOHN WICK",
          rated:"(U)",
          date:"23 MARCH 2023"
        },
        {
          id:3,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7872",
          trailer:"",
          name:"BHOLAA",
          rated:"(U)",
          date:"30 MARCH 2023"
        },
        {
          id:4,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7870",
          trailer:"",
          name:"KABZAA",
          rated:"(PG)",
          date:"17 MARCH 2023"
        },
      ]
  return (
    <div className="futureShow">
          {comingShows.map(futureShow=>(
          <ComingPoster futureShow={futureShow} key={futureShow.id}/>
        ))}
        
       
    </div>
  )
}

export default ComingSoon