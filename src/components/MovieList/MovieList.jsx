import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList, getMovieListByGenre } from "../../redux/slices/movieListSlice";
import MovieCard from "../MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./MovieList.css";
import Loading from "../Loading/Loading";

const MovieList = ({ selectedGenre }) => {
  const dispatch = useDispatch();
  const { movieList, status, error } = useSelector((store) => store.movieList);

  // Pagination state
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = movieList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movieList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movieList.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (!selectedGenre) {
      dispatch(getMovieList());
    } else {
      dispatch(getMovieListByGenre(selectedGenre.id));
    }
  }, [selectedGenre, dispatch]);

  return (
    <div className="Movie-list">
      <h1>{selectedGenre ? selectedGenre.name : "Discover"}</h1>
      <ul>
        {status === "fulfilled" ? (
          currentItems.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : status === "pending" ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : null}
      </ul>
      {status === "fulfilled" && movieList.length > itemsPerPage && (
        <div className="pagination-component">
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel={<GrNext />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<GrPrevious />}
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
};

export default MovieList;
