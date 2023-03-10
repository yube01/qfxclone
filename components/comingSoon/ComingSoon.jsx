import React from "react";
import "./comingsoon.css";
import ComingPoster from "./ComingPoster";

const ComingSoon = () => {
  const comingShows = [
    {
      id: 1,
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7861",
      link: "https://www.youtube.com/embed/dtdNFLECvAk",
      name: "TU JHOOTI MAIN MAKKARR",
      rated: "(PG)",
      date: "8 MARCH 2023",
      genre: "Comedy, Drama",
      runtime: "2hrs 32min",
      director: "Hem Raj BC",
      cast: "Deepak Raj Giri, Deepa Shree Niraula, Kedar Ghimire",
      language: "Nepali",
      synopsis:
        "Chhakka Panja 4 is a comedy drama movie starring Deepak Raj   Giri, Dipaa Shree Niroula, Nirmal Sharma, Buddhi Tamang, Raj  Acharya, Bedana Rai, Sushma Niraula and directed by Hemraj B.C.",
    },
    {
      id: 2,
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7871",
      trailer: "",
      link: "https://www.youtube.com/embed/dtdNFLECvAk",
      name: "JOHN WICK",
      rated: "(U)",
      date: "23 MARCH 2023",
      genre: "Comedy, Drama",
      runtime: "2hrs 32min",
      director: "Hem Raj BC",
      cast: "Deepak Raj Giri, Deepa Shree Niraula, Kedar Ghimire",
      language: "Nepali",
      synopsis:
        "Chhakka Panja 4 is a comedy drama movie starring Deepak Raj   Giri, Dipaa Shree Niroula, Nirmal Sharma, Buddhi Tamang, Raj  Acharya, Bedana Rai, Sushma Niraula and directed by Hemraj B.C.",
    },
    {
      id: 3,
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7872",
      trailer: "",
      link: "https://www.youtube.com/embed/dtdNFLECvAk",
      name: "BHOLAA",
      rated: "(U)",
      date: "30 MARCH 2023",
      genre: "Comedy, Drama",
      runtime: "2hrs 32min",
      director: "Hem Raj BC",
      cast: "Deepak Raj Giri, Deepa Shree Niraula, Kedar Ghimire",
      language: "Nepali",
      synopsis:
        "Chhakka Panja 4 is a comedy drama movie starring Deepak Raj   Giri, Dipaa Shree Niroula, Nirmal Sharma, Buddhi Tamang, Raj  Acharya, Bedana Rai, Sushma Niraula and directed by Hemraj B.C.",
    },
    {
      id: 4,
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7870",
      trailer: "",
      link: "https://www.youtube.com/embed/dtdNFLECvAk",
      name: "KABZAA",
      rated: "(PG)",
      date: "17 MARCH 2023",
      genre: "Comedy, Drama",
      runtime: "2hrs 32min",
      director: "Hem Raj BC",
      cast: "Deepak Raj Giri, Deepa Shree Niraula, Kedar Ghimire",
      language: "Nepali",
      synopsis:
        "Chhakka Panja 4 is a comedy drama movie starring Deepak Raj   Giri, Dipaa Shree Niroula, Nirmal Sharma, Buddhi Tamang, Raj  Acharya, Bedana Rai, Sushma Niraula and directed by Hemraj B.C.",
    },
  ];
  return (
    <div className="futureShow">
      {comingShows.map((futureShow) => (
        <ComingPoster futureShow={futureShow} key={futureShow.id} />
      ))}
    </div>
  );
};

export default ComingSoon;
