import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../redux/slices/movieListSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = () => {
  const dispatch = useDispatch();

  const { movieList } = useSelector((store) => store.movieList);

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <div className="Movie-list">
      <ul>
        {movieList && movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
 
    </div>
  );
};

export default MovieList;
