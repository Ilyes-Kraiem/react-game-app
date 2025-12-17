import Button from 'react-bootstrap/Button';
import React from "react";
import { Link } from "react-router-dom";
const GameCard = ({ game }) => {
  return (
    <article className="movie-card">
      <div className="movie-card__poster-wrapper">
        <img
          className="movie-card__poster"
          src={game.poster}
          alt={game.title}
        />
      </div>
      <div className="movie-card__body">
        <h3 className="movie-card__title">{game.title}</h3>
        <p className="movie-card__description">{game.description}</p>
        <div className="movie-card__footer">
          <Link
            to={`/Trailer/${game.title}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="danger">Trailer</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};
export default GameCard;
