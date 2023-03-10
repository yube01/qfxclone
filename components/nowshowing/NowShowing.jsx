import React from 'react'
import Poster from '../poster/Poster'
import "./nowShowing.css"

const NowShowing = () => {
  const nowShowings = [
    {
      id:1,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7847",
      src:"https://www.youtube.com/embed/V3tEPolMPKQ",
      name:"CHHAKKA PANJA 4",
      rated:"(U)",
      genre:"Comedy, Drama",
      runtime:"2hrs 32min",
      director:"Hem Raj BC",
      cast:"Deepak Raj Giri, Deepa Shree Niraula, Kedar Ghimire",
      language:"Nepali",
      synopsis:"Chhakka Panja 4 is a comedy drama movie starring Deepak Raj   Giri, Dipaa Shree Niroula, Nirmal Sharma, Buddhi Tamang, Raj  Acharya, Bedana Rai, Sushma Niraula and directed by Hemraj B.C."
    },
  
    {
      id:3,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7857",
      src:"https://www.youtube.com/embed/gnuTqK0E6EE",
      name:"FULBARI",
      rated:"(PG)",
      genre:"Comedy, Drama",
      runtime:"2hrs 32min",
      director:"Hem Raj BC",
      cast:"Deepak Raj Giri, Deepa Shree Niraula, Kedar Ghimire",
      language:"Nepali",
      synopsis:"FULBARI Panja 4 is a comedy drama movie starring Deepak Raj   Giri, Dipaa Shree Niroula, Nirmal Sharma, Buddhi Tamang, Raj  Acharya, Bedana Rai, Sushma Niraula and directed by Hemraj B.C."
    },
    {
      id:4,
      url:"https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7875",
      src:"https://www.youtube.com/embed/AHmCH7iB_IM",
      name:"CREED III",
      rated:"(U)",
      genre:"Comedy, Drama",
      runtime:"2hrs 32min",
      director:"Hem Raj BC",
      cast:"Deepak Raj Giri, Deepa Shree Niraula, Kedar Ghimire",
      language:"English",
      synopsis:"Creed is a comedy drama movie starring Deepak Raj   Giri, Dipaa Shree Niroula, Nirmal Sharma, Buddhi Tamang, Raj  Acharya, Bedana Rai, Sushma Niraula and directed by Hemraj B.C."

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