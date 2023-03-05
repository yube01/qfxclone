import React from 'react'
import Poster from '../poster/Poster'
import "./nowShowing.css"

const NowShowing = () => {
  const nowShowings = [
    {
      id:1,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7847",
      trailer:""
    },
    {
      id:2,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7862",
      trailer:""
    },
    {
      id:3,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7857",
      trailer:""
    },
    {
      id:4,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7875",
      trailer:""
    },
  ]
  return (
    <div className="nowShowing">
    
        {nowShowings.map(nowShow=>(
          <Poster nowShow={nowShow} key={nowShow.id}/>
        ))}
       
        
    </div>
  )
}

export default NowShowing