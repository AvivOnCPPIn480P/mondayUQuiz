import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTimer: 15,
  quizNumOfQuestions: 20,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizTimer: (state, action) => {
      state.quizTimer = action.payload;
    },
    setQuizNumOfQuestions: (state, action) => {
      state.quizNumOfQuestions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuizTimer, setQuizNumOfQuestions } = quizSlice.actions;

export default quizSlice.reducer;