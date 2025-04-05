import { createSlice } from "@reduxjs/toolkit";
import { getItemFromStorage, setItemToStorage } from "../storage/storageService";


const initialState = {
  favoriteMovies: getItemFromStorage("favorite"),
};


export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
        const findMovie = state.favoriteMovies?.some((movie) => movie.id === action.payload.id);
        if (!findMovie) {
          state.favoriteMovies.push(action.payload);
          setItemToStorage('favorite',state.favoriteMovies);
        }

    },
    removeFromFavorite: (state, action) => {
        const filterMovies = state.favoriteMovies?.filter(movie => movie.id !== action.payload.id);
        state.favoriteMovies = filterMovies;
        setItemToStorage('favorite', state.favoriteMovies);
    },
  },

});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;


