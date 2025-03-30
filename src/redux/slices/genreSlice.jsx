import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GENRE, API_KEY } from "../../constans/api";

const initialState = {
  genres: [],
};

export const getGenre = createAsyncThunk("getGenres", async () => {
  const res = await axios.get(`${API_GENRE}?api_key=${API_KEY}`);
  return res.data.genres;
});

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    //!reducers alanında yalnızca uygulamanın kendi içerisinde kullandığımız dış bir kaynağa bir api istek atmadığımız methodları tutuyoruz yalnızca.
  },
  extraReducers: (builder) => {
    //!reducer alanında dış kaynaklara api istekleri atarak gelen verileri işlediğimiz methodları tutuyoruz. (yani HTTP istekleri ile veri çektiğimiz methodları tutuyoruz burada.)
    builder.addCase(getGenre.fulfilled, (state, action) => {
        //!Normalde api den gelen istek pending, fulfilled ve rejected olarak 3 aşamadan geçiyor. Ancak biz burada sadece fulfilled olanı kullanıyoruz. Yani istek başarılı bir şekilde tamamlandığında ne olacağını belirtiyoruz.
      //! fulfilled: istek başarılı bir şekilde tamamlandığında ne olacağını belirtiyoruz.
      state.genres = action.payload;
      //! state initialState i temsil ediyor action ise api den gelen veriyi temsil ediyor.
      //! action.payload: api den gelen veriyi alıyoruz ve state.genres a atıyoruz.
      //! Yani state.genres artık api den gelen veriyi tutuyor.
    });
  },
});

export const {} = genreSlice.actions;

export default genreSlice.reducer;
