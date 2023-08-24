import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const shortenUrl = createAsyncThunk(
  "urls/shortenUrl",
  async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      return response.data.result.full_short_link;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const urlSlice = createSlice({
  name: "urls",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(shortenUrl.fulfilled, (state, action) => {
      state.push({ shortUrl: action.payload });
    });
  },
});

export default urlSlice.reducer;
