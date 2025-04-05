import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';
import { GrPrevious, GrNext } from "react-icons/gr";
import './MyList.css'

const MyList = () => {
  const { favoriteMovies } = useSelector((store) => store.favorites)

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10 ; 
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = favoriteMovies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(favoriteMovies.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % favoriteMovies.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  }

  return (
    <div className='my-list'>
        <h1>Your Favorite Movies</h1>
        <ul>
            {
              currentItems && currentItems.map((movie, index) => (
                  <MovieCard key={movie.id + index} movie={movie} />
              ))
            }
        </ul>
        <div className='pagination-component'>
                <ReactPaginate
                    className='pagination'
                    breakLabel="..."
                    nextLabel={<GrNext />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={10}
                    pageCount={pageCount}
                    previousLabel={<GrPrevious />}
                    renderOnZeroPageCount={null}
                />
            </div>
    </div>
  )
}

export default MyList