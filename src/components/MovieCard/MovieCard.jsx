import React from "react";
import "./MovieCard.css";
import { API_IMG } from "../../constans/api";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie;

  return (
    <div className="Movie-Card">
      <Link to={`/${id}`}>
        <div className="gradient">
          <img src={`${API_IMG}/${poster_path}`} alt={title} />
          <div className="movie-info">
            <div className="movie-rating">
              <p>{vote_average.toFixed(1)}</p>
              <FaStar />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
