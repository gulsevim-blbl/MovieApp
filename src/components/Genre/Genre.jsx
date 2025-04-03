import React, { useEffect, useState } from "react";
import  { getGenre } from "../../redux/slices/genreSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Genre.css";

//! state e ulaşmak için useSelector kullanıyoruz. Yani redux ta tanımladığımız state e ulaşmak için useSelector kullanıyoruz.
//! dispatch i kullanarak redux ta tanımladığımız actionları çağırıyoruz. Yani redux ta tanımladığımız actionları çağırmak için useDispatch kullanıyoruz.

const Genre = ({setSelectedGenre}) => {
  const { genres } = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  const [activeGenre, setActiveGenre] =useState(null);

  const handleGenre = (genre) => {
    setSelectedGenre(genre);
    setActiveGenre(genre.id);
  };
  
  useEffect(() => {
    dispatch(getGenre());
  }, []);


  return (
    <div className="genres">
      <ul>
        {genres &&
          genres.map((genre) => (
            <li
              className={`genre ${activeGenre == genre.id ? 'active' : ''}`}
              onClick={() => handleGenre(genre)}
              key={genre.id}
            >
              {genre.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Genre;
