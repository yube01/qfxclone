import React from "react";
import ScrollTicker from "../../components/scrollticker/ScrollTicker";
import Header from "../../components/header/Header";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";

import "./ComingMovie.css";
import ComingPoster1 from "./comingPoster1";
const ComingMovie = () => {
  const comingShows2 = [
    {
      id: 1,
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7861",
      trailer: "",
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
    {
      id: 5,
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7850",
      trailer: "",
      name: "SHAZAM! FURY OF THE GODS",
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
    {
      id: 6,
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7873",
      trailer: "",
      name: "FAST X",
      rated: "(U)",
      date: "19 MAY 2023",
      genre: "Comedy, Drama",
      runtime: "2hrs 32min",
      director: "Hem Raj BC",
      cast: "Deepak Raj Giri, Deepa Shree Niraula, Kedar Ghimire",
      language: "Nepali",
      synopsis:
        "Chhakka Panja 4 is a comedy drama movie starring Deepak Raj   Giri, Dipaa Shree Niroula, Nirmal Sharma, Buddhi Tamang, Raj  Acharya, Bedana Rai, Sushma Niraula and directed by Hemraj B.C.",
    },
    {
      id: 7,
      url: "https://api.qfxcinemas.com/api/public/ThumbnailImage?eventId=7876",
      trailer: "",
      name: "KISI KA BHAI KISI KI JAAN",
      rated: "(U)",
      date: "21 APRIL 2023",
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
    <div className="comingMovie">
      <ScrollTicker />
      <Header />
      <div className="upcoming">
        <div className="comingSoon1">
          <h1>coming soon</h1>
        </div>
        <div className="upcomingMovie">
          {comingShows2.map((nextComingShow) => (
            <ComingPoster1
              nextComingShow={nextComingShow}
              key={nextComingShow.id}
            />
          ))}
        </div>
      </div>
      <div className="footer1">
        <Partner />
        <Footer />
      </div>
    </div>
  );
};

export default ComingMovie;
