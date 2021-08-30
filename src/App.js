import React, { useState } from "react";
import "./styles.css";

const genreDB = {
  Ghazal: {
    "Tum Itna Jo Muskura Rahe Ho - Jagjit Singh": "5.0/5.0",
    " Aaj jaane ki zid na karo - Farida Khanum": "5.0/5.0",
    "Tujhse Naraz Nahin Zindagi - Gulzar": "5.0/5.0",
    "Koi Fariyaad - Jagjit Singh": "5.0/5.0",
    "Aap Jinke Kareeb Hote Hain - Pankaj Udhas": "5.0/5.0",
    " Baat niklegi toh phir door talak jayegi - Jagjit Singh ": "4.5/5.0"
  },
  Classical: {
    "O Re Piya - Rahat Fateh Ali Khan": "5.0/5.0",
    "Kalank (Title Track) - Arijit Singh": "5.0/5.0",
    "Lahu Munh Lag Gaya - Shail Hada": "4.5/5.0"
  },
  "Lo-fi": {
    "Qaafirana, Kedarnath - Arijit Singh": "5.0/5.0",
    "Kabira, Yeh Jawaani Hai Deewani - Arijit Singh": "4.5/5.0",
    "Agar Tum Sath Ho Remix - Uzumaki Baka": "4.0/5.0"
  },
  Pop: {
    "Cheap Thrills - Sia": "5.0/5.0",
    "Cradles - Sub Urban": "5.0/5.0",
    "Watermelon Sugar - Harry Styles": "4.5/5.0",
    "MONTERO (Call Me By Your Name)": "4.5/5.0",
    "Levitating (feat. DaBaby)": "4.0/5.0"
  }
};

export default function App() {
  const genre = Object.keys(genreDB);

  const [songListAndRating, setSongListAndRating] = useState({});

  const genreClickHandler = (item) => {
    setSongListAndRating(genreDB[item]);
  };

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="musical-note">
          🎙️
        </span>
        goodMusic
      </h1>
      {genre.map((item) => (
        <button
          key={item}
          style={{ cursor: "pointer" }}
          onClick={genreClickHandler.bind(this, item)}
        >
          {item}
        </button>
      ))}
      <hr />
      <div>
        {Object.keys(songListAndRating).map((song) => {
          return (
            <div
              style={{
                border: "1px solid #abc4ff",
                margin: "0.6rem",
                marginTop: "1rem",
                padding: "1rem",
                width: "55%",
                borderRadius: "0.5rem"
              }}
              key={song}
            >
              <div
                style={{
                  fontWeight: "540",
                  fontSize: "16px",
                  paddingBottom: "0.5rem"
                }}
              >
                {song}
              </div>
              <div>{songListAndRating[song]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
