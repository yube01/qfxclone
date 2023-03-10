import React from 'react'
import Poster from '../poster/Poster'
import "./nowShowing.css"

const NowShowing = () => {
  const nowShowings = [
    {
      id:1,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7847",
      trailer:"",
      name:"CHHAKKA PANJA 4",
      rated:"(U)"
    },
    {
      id:2,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7862",
      trailer:"",
      name:"2.0 CHHADKE",
      rated:"(PG)"
    },
    {
      id:3,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7857",
      trailer:"",
      name:"FULBARI",
      rated:"(PG)"
    },
    {
      id:4,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7875",
      trailer:"",
      name:"CREED III",
      rated:"(U)"
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