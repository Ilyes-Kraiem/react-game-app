import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Navbarr from "./components/Navbarr";
import Gamelist from "./components/Gamelist";
import Contact from "./components/Contact";
import Trailer from "./components/Trailer";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [Games, setGames] = useState([ 
      {
    title: "Fortnite",
    poster: "https://wallpapers.com/images/featured/fortnite-pictures-b5kfcchwazwiz3cs.jpg",
    description: "Battle royale meets creativity in this fast-paced shooter.",
    trailer: "https://www.youtube.com/watch?v=WJW-bzXZM8M", 
    rating: 4.2,
  },
  {
    title: "Valorant",
    poster: "https://i.pinimg.com/736x/79/aa/f7/79aaf76e647b1eac1329b41a661ab60d.jpg",
    description: "Tactical team shooter with unique agents and abilities.",
    trailer: "https://www.youtube.com/embed/U6OGWxRWUR4?si=TiC2lAnNzVZjivyU",
    rating: 4.5,
  },
  {
    title: "Genshin Impact",
    poster: "https://assets-prd.ignimgs.com/2020/09/29/genshin-impact-button-fin-1601346152039.jpg",
    description: "Open-world action RPG with anime aesthetics and elemental powers.",
    trailer: "https://www.youtube.com/embed/HLUY1nICQRY?si=Xf-nyrwSv2GrrfdI",
    rating: 4.7,
  },
  {
    title: "Clash Royale",
    poster: "https://assets-prd.ignimgs.com/2022/05/27/clashroyale-1653673820137.jpg",
    description: "Real-time multiplayer card battles with strategic tower defense.",
    trailer: "https://www.youtube.com/embed/1RC1yxqTTd8?si=urzVzM-bD91Hj6Xv",
    rating: 4.4,
  },
  {
    title: "Call of Duty: Mobile",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Call_of_Duty_Infinite_Warfare_cover.jpg/250px-Call_of_Duty_Infinite_Warfare_cover.jpg",
    description: "Classic FPS experience with mobile-optimized controls and maps.",
    trailer: "https://www.youtube.com/embed/uUo5gnaYB_w?si=NisC6Lv1kzduIw-F",
    rating: 4.6,
  },
  {
    title: "Subway Surfers",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Subway_Surfers.jpg/250px-Subway_Surfers.jpg",
    description: "Addictive endless runner with vivid visuals and upgrades.",
    trailer: "https://www.youtube.com/embed/7ghSziUQnhs?si=RWxnCg3Y1Duzf89N",
    rating: 4.5,
  },
  {
    title: "Candy Crush Saga",
    poster: "https://i.pinimg.com/736x/0d/4a/d9/0d4ad9fb461dd24f81fc7c8c0622eeac.jpg",
    description: "Match-three puzzle game with sweet explosions and daily levels.",
    trailer: "https://www.youtube.com/embed/EW-HVzqQpsI?si=RCME3-Ck1bOBa9Rd" ,
    rating: 4.3,
  },
  {
    title: "Roblox",
    poster: "https://i.pinimg.com/736x/a8/75/b2/a875b2bdfdc064b68c75edb30983b8de.jpg",
    description: "User-generated game platform — play or build anything.",
    trailer: "https://www.youtube.com/embed/eAvXhNlO-rA?si=hGzTkr8Xxp6UArWI" ,
    rating: 4.4,
  },
  {
    title: "League of Legends: Wild Rift",
    poster: "https://i.pinimg.com/1200x/48/d1/41/48d141574feb3ee452d139d0975150d5.jpg",
    description: "Mobile version of the world-famous MOBA game.",
    trailer: "https://www.youtube.com/embed/e2TZAAQmGho?si=ygFv-2X785Eftngk",
    rating: 4.6,
  },
  {
    title: "8 Ball Pool",
    poster: "https://i.pinimg.com/1200x/3b/57/0b/3b570b3d930faf82fb317268feb66732.jpg",
    description: "Classic pool game experience with online multiplayer.",
    trailer: "https://www.youtube.com/embed/MarGQrmbPm0?si=pwbsYSFmHE3hCrGS" ,
    rating: 4.1,
  },
  {
    title: "Terraria",
    poster: "",
    description: "2D sandbox survival with exploration, crafting, and monsters.",
    trailer: "https://www.youtube.com/embed/QUdcwfGyK1M?si=6MmgpCvPRizBKBX0",
    rating: 4.6,
  },
  {
    title: "Jetpack Joyride",
    poster: "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-184042-52.jpg",
    description: "Side-scrolling endless runner with jetpacks, coins, and fun chaos.",
    trailer: "https://www.youtube.com/embed/Jzxi8nid9BQ?si=jKzk3R7-TBxD9Axz" ,
    rating: 4.3,
  },
  {
    title: "PUBG Mobile",
    poster: "https://www.pubgmobile.com/images/event/common/icon.png",
    description: "Intense battle royale game with realistic graphics and modes.",
    trailer: "https://www.youtube.com/embed/uCd6tbUAy6o?si=E8y88vOUx8rJVw3d",
    rating: 4.5,
  },
  ]);
  const [filterTitle, setFilterTitle] = useState("");
  const [minRating, setMinRating] = useState(0);
  const filteredGames = useMemo(() => {
    const t = filterTitle.trim().toLowerCase();
    return Games.filter(
      (g) =>
        g.title.toLowerCase().includes(t) && Number(g.rating) >= Number(minRating)
    );
  }, [Games, filterTitle, minRating]);
  const addGame = (game) => setGames((prev) => [game, ...prev]);
  return (
    <div className="app">
      <Navbarr />
      <Routes>
        <Route
          path="/"
          element={
            <Gamelist
              games={Games}
              onAddGame={addGame}
              filterTitle={filterTitle}
              setFilterTitle={setFilterTitle}
              minRating={minRating}
              setMinRating={setMinRating}
            />
          }
        />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Trailer/:title" element={<Trailer games={Games} />} />
      </Routes>
    </div>
  );
}
export default App;