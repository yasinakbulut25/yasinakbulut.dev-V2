import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  works: [],
  isLoading: false,
  error: null,
};

const workSlice = createSlice({
  name: "works",
  initialState,
  reducers: {
    fetchWorksRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchWorksSuccess: (state, action) => {
      state.isLoading = false;
      state.works = action.payload;
    },
    fetchWorksFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWorksRequest, fetchWorksSuccess, fetchWorksFailure } = workSlice.actions;
export default workSlice.reducer;
