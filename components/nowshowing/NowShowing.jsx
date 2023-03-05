import React from 'react'
import Poster from '../poster/Poster'
import "./nowShowing.css"

const NowShowing = () => {
  return (
    <div className="nowShowing">
      <h1 className='textnow'>
        NOW SHOWING
      </h1>
        <Poster/>
       
        
    </div>
  )
}

export default NowShowing