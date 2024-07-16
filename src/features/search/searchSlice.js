import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchResults = createAsyncThunk("search/fetchSearchResults", async query => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_FETCH_KEY}`,
    },
  });
  const data = await response.json();
  const filteredResults = data
    .filter(
      profile =>
        (profile.name && profile.name.toLowerCase().includes(query.toLowerCase())) ||
        (profile.surname && profile.surname.toLowerCase().includes(query.toLowerCase())) ||
        (profile.title && profile.title.toLowerCase().includes(query.toLowerCase()))
    )
    .slice(0, 5);
  return filteredResults;
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSearchResults.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
