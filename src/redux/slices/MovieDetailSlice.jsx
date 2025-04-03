import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_MOVIE_DETAIL, API_KEY } from "../../constans/api";

const initialState = {
  movieDetail: {},
  status: "idle", // Yükleme durumunu takip etmek için
  error: null, // Hata durumunu takip etmek için
};

export const getMovieDetailById = createAsyncThunk(
  "movieDetail/getMovieDetailById",
  async (id) => {
    const res = await axios.get(`${API_MOVIE_DETAIL}/${id}?api_key=${API_KEY}`);
    return res.data;
  }
);

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetailById.pending, (state, action) => {
        state.status = action.meta.requestStatus;
      })
      .addCase(getMovieDetailById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieDetail = action.payload; // API'den dönen veri
      })
      .addCase(getMovieDetailById.rejected, (state, action) => {
        state.status = action.meta.requestStatus;
        state.error = action.error.message;
      });
  },
});

export default movieDetailSlice.reducer;
