import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetailById } from "../../redux/slices/MovieDetailSlice";

const MovieDetail = () => {
  const { movieDetail } = useSelector((store) => store.movieDetail);
  const {
    title,
    overview,
    vote_average,
    backdrop_path,
    genres,
    original_language,
    release_date,
  } = movieDetail;

  const dispatch = useDispatch();

  const { id } = useParams();

  console.log(movieDetail);

  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [dispatch]);

  return <div>{id}</div>;
};

export default MovieDetail;
