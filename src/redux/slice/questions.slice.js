import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currQuestion: 0,
  questions: [],
  quizQuestions: [],
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setQuizQuestions: (state, action) => {
      state.quizQuestions = action.payload;
    },
    setCurrQuestion: (state, action) => {
      state.currQuestion = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuestions, setQuizQuestions, setCurrQuestion } =
  questionsSlice.actions;

export default questionsSlice.reducer;