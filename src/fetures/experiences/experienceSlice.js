import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experiences: [],
  isLoading: false,
  error: null,
};

const experienceSlice = createSlice({
  name: "experiences",
  initialState,
  reducers: {
    fetchExperiencesRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchExperiencesSuccess: (state, action) => {
      state.isLoading = false;
      state.experiences = action.payload;
    },
    fetchExperiencesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchExperiencesRequest,
  fetchExperiencesSuccess,
  fetchExperiencesFailure,
} = experienceSlice.actions;

export default experienceSlice.reducer;
