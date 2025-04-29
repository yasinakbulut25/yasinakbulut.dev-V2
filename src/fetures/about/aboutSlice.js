import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: null,
  isLoading: false,
  error: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    fetchAboutRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchAboutSuccess: (state, action) => {
      state.isLoading = false;
      state.about = action.payload;
    },
    fetchAboutFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAboutRequest,
  fetchAboutSuccess,
  fetchAboutFailure,
} = aboutSlice.actions;

export default aboutSlice.reducer;
