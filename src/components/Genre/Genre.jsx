import React, { useEffect } from "react";
import genreSlice, { getGenre } from "../../redux/slices/genreSlice";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../redux/store";
import "./Genre.css";

//! state e ulaşmak için useSelector kullanıyoruz. Yani redux ta tanımladığımız state e ulaşmak için useSelector kullanıyoruz.
//! dispatch i kullanarak redux ta tanımladığımız actionları çağırıyoruz. Yani redux ta tanımladığımız actionları çağırmak için useDispatch kullanıyoruz.

const Genre = () => {
  const { genres } = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenre());
  }, []);
  return (
    <div className="genres">
      <ul>
        {genres &&
          genres.map((genre, index) => <li key={genre.id}>{genre.name}</li>)}
      </ul>
    </div>
  );
};

export default Genre;
