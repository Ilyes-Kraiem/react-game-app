import React from "react";
import GameCard from "./GameCard";
import Filter from "./Filter";
import AddGame from "./AddGame";
const Gamelist = ({games,onAddGame,filterTitle,setFilterTitle,minRating,setMinRating}) => {
  return (
    <section className="collection-section">
      <div className="collection-header">
        <h2>Game App</h2>
        <div className="collection-subtitle">
          Filter by title/rating • Click any game to open trailer page
        </div>
      </div>
      <div className="collection-toolbar">
        <Filter
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
          minRating={minRating}
          setMinRating={setMinRating}
        />
      </div>
      <div className="collection-grid">
        <div className="collection-grid-main">
          {games.map((game)=><GameCard game={game}/>)}
        </div>
        <div className="collection-grid-side">
          <AddGame />
        </div>
      </div>
    </section> 
  );
};
export default Gamelist;
