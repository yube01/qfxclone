import React from 'react'
import "./nextchange.css"
import NextPoster from './NextPoster'
const NextChange = () => {
    const nextShowings = [
        {
          id:1,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7845",
          trailer:"",
          name:"AVATAR : THE WAY OF WATER",
          rated:"(U)"
        },
        {
          id:2,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7869",
          trailer:"",
          name:"ANT-MAN AND THE WASP: QUANTUMANIA",
          rated:"(PG)"
        },
     
        {
          id:3,
          url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7873",
          trailer:"",
          name:"FAST AND FURIOUS 10",
          rated:"(U)"
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