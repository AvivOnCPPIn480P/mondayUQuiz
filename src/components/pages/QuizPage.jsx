import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setCurrQuestion } from "../../redux/slice/questions.slice";
import Question from "../Questions";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const QuizPage = () => {
  const questions = useSelector((state) => state.Questions.questions);
  const quizQuestions = useSelector((state) => state.Questions.quizQuestions);
  const currQuestion = useSelector((state) => state.Questions.currQuestion);
  const questionTimer = useSelector((state) => state.Quiz.quizTimer);
  const dispatch = useDispatch();

  const onTimerComplete = () => {
    dispatch(setCurrQuestion(currQuestion + 1));
  };

  return (
    
    <QuizContainer>
      <QuizTitle>Question {currQuestion + 1}</QuizTitle>
      <TimerContainer>
        <CountdownCircleTimer
          key={currQuestion}
          isPlaying
          size={50}
          duration={questionTimer}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={onTimerComplete}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </TimerContainer>
      {questions && (
        <Question question={quizQuestions[currQuestion]}></Question>
      )}
    </QuizContainer>
  );
};

export default QuizPage;

const QuizContainer = styled.div`
display: flex;
flex-direction: column;
height: 600px;
border-radius: 5px;
width: 100%;
margin: auto;
background-color: #8A2BE2;
box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
`;

const QuizTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 15px;
`;

