import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetailById } from "../../redux/slices/MovieDetailSlice";
import { API_IMG } from "../../constans/api";
import "./MovieDetail.css";
import { FaStar } from "react-icons/fa";
import Loading from "../../components/Loading/Loading";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Dinamik olarak gelen id'yi alıyoruz
  
  const { movieDetail } = useSelector((store) => store.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [id, dispatch]);

  // Eğer movieDetail boşsa veya undefined ise "Loading..." göster
  if (!movieDetail || Object.keys(movieDetail).length === 0) {
    return <Loading />;
  }
  const {
    title,
    overview,
    vote_average,
    backdrop_path,
    poster_path,
    genres,
    spoken_languages,
    release_date,
  } = movieDetail;

  const release_year = new Date(release_date).getFullYear(); // Yılı almak için release_date'i Date objesine çeviriyoruz

  return (
    <div className="movie-detail">
      <img className="backdrop" src={`${API_IMG}/${backdrop_path}`} alt={title} />
      <header>
        <p>{title}</p>
        <div className="add-favorite-remove"></div>
      </header>
      <div className="content">
        <div className="left">
          <div className="movie-backdrop_path">
            <img src={`${API_IMG}/${poster_path}`} alt={title} />
          </div>
        </div>
        <div className="right">
          <div className="movie-overview">
            <p>{overview}</p>
          </div>
          <div className="movie-rating">
            <FaStar />
            <p>{vote_average.toFixed(1)}</p>
          </div>
          <div className="release-date">
            <span>Year:</span>
            <p>{release_year}</p>
          </div>
          <div className="movie-info">
            <div className="movie-genres">
              <span>Genres:</span>
              <ul>
                {genres?.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            <div className="movie-languages">
              <span>Languages:</span>
              <ul>
                {spoken_languages?.map((languages, index) => (
                  <li key={index}>{languages.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
