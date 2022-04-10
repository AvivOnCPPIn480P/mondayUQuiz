import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./slice/questions.slice";
import scoreReducer from "./slice/score.slice";
import quizReducer from "./slice/quiz.slice";

export const store = configureStore({
  reducer: {
    Questions: questionsReducer,
    Score: scoreReducer,
    Quiz: quizReducer,
  },
});