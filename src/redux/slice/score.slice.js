import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxScore: 0,
  currScore: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setMaxScore: (state, action) => {
      state.maxScore = action.payload;
    },
    setCurrScore: (state, action) => {
      state.currScore = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMaxScore, setCurrScore } = scoreSlice.actions;

export default scoreSlice.reducer;