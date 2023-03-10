import React from "react";
import "./nextchange.css";
import NextPoster from "./NextPoster";
const NextChange = () => {
  const nextShowings = [
    {
      id: 1,
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7845",
      trailer: "",
      name: "AVATAR : THE WAY OF WATER",
      rated: "(U)",
      date: "",
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
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7869",
      trailer: "",
      name: "ANT-MAN AND THE WASP: QUANTUMANIA",
      rated: "(PG)",
      date: "",
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
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7873",
      trailer: "",
      name: "FAST AND FURIOUS 10",
      rated: "(U)",
      date: "",
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
    <div className="nextChange">
      {nextShowings.map((nextShow) => (
        <NextPoster nextShow={nextShow} key={nextShow.id} />
      ))}
    </div>
  );
};

export default NextChange;
