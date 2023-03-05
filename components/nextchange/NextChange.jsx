import React from 'react'
import "./nextchange.css"
import NextPoster from './NextPoster'
const NextChange = () => {
    const nextShowings = [
        {
          id:1,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7845",
          trailer:""
        },
        {
          id:2,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7869",
          trailer:""
        },
     
        {
          id:3,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7873",
          trailer:""
        },
      ]
  return (
    <div className="nextChange">
          {nextShowings.map(nextShow=>(
          <NextPoster nextShow={nextShow} key={nextShow.id}/>
        ))}
       
    </div>
  )
}

export default NextChange