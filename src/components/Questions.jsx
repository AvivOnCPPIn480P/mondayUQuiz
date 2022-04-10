import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setCurrQuestion } from "../redux/slice/questions.slice";
import { setCurrScore } from "../redux/slice/score.slice";
import { useHistory } from "react-router-dom";
import { EASY_QUESTIONS_POINTS, HARD_QUESTIONS_POINTS, MEDIUM_QUESTIONS_POINTS } from "../constants";

const Question = (props) => {
  const currQuestion = useSelector((state) => state.Questions.currQuestion);
  const quizQuestions = useSelector((state) => state.Questions.quizQuestions);
  const currScore = useSelector((state) => state.Score.currScore);
  const dispatch = useDispatch();
  const history = useHistory();

  const checkIfLastQuestion = () => {
    if (currQuestion === quizQuestions.length - 1) history.push("/score");
  };

  const onAnswerClicked = (event) => {
    if (props.question.correct_answer === event.target.value) {
      switch (props.question.difficulty) {
        case "easy":
          dispatch(setCurrScore(currScore + EASY_QUESTIONS_POINTS));
          break;
        case "medium":
          dispatch(setCurrScore(currScore + MEDIUM_QUESTIONS_POINTS));
          break;
        case "hard":
          dispatch(setCurrScore(currScore + HARD_QUESTIONS_POINTS));
          break;
      }
    }
    dispatch(setCurrQuestion(currQuestion + 1));
    checkIfLastQuestion();
  };

  return (
    <QuestionContainer>
      <QuestionText>{props.question.question}</QuestionText>
      {props.question.answers.map((answer, index) => {
        return (
          <QuestionAnswer
            key={index}
            value={answer}
            onClick={(event) => {
              onAnswerClicked(event);
            }}
          >
            {answer}
          </QuestionAnswer>
        );
      })}
    </QuestionContainer>
  );
};

export default Question;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 150px;
  background-color: #8A2BE2;
`;

const QuestionText = styled.div`
  width: 150%;
  margin: auto;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

const QuestionAnswer = styled.button`
  height: 40px;
  width: 30%;
  margin: auto;
  font-weight: 600;
  background-color: transparent;
  border-color: #a5a5c4;
  font-size: 16px;
  border-radius: 5px;
  color: white;
  &:hover {
    .button {
      display: none;
    }
`;