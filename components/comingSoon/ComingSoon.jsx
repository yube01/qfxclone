import React from 'react'
import "./comingsoon.css"
import ComingPoster from './ComingPoster'

const ComingSoon = () => {
    const comingShows = [
        {
          id:1,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7861",
          trailer:""
        },
        {
          id:2,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7859",
          trailer:""
        },
        {
          id:3,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7852",
          trailer:""
        },
        {
          id:4,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7870",
          trailer:""
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