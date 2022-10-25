import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const item = props.item;
  const bg = "https://image.tmdb.org/t/p/w500/"+(item.poster_path);

  return (
    <Link to={"/" + props.category + "/" + item.id}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
