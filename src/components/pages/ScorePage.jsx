import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  BAD_SCORE_MESSAGES,
  GOOD_SCORE_MESSAGES,
  PERFECT_SCORE_MESSAGES,
  PERFECT_SCORE,
  LOWER_THRESHOLD,
} from "../../constants";
import { useHistory } from "react-router-dom";

const Score = () => {
  const [displayMessage, setDisplayMessage] = useState("");
  const [colorScreen, setColorScreen] = useState("");
  const [finalScore, setFinalScore] = useState(0);
  const score = useSelector((state) => state.Score.currScore);
  const maxScore = useSelector((state) => state.Score.maxScore);
  const history = useHistory();

  const generateMessage = () => {
    const finalScoreNew = Math.round((score / maxScore) * PERFECT_SCORE);
    setFinalScore(finalScoreNew);
    if (finalScoreNew >= PERFECT_SCORE) {
      setDisplayMessage(PERFECT_SCORE_MESSAGES);
      setColorScreen('#008000')
    } else if (finalScoreNew > LOWER_THRESHOLD) {
      setDisplayMessage(GOOD_SCORE_MESSAGES);
      setColorScreen('#FFFF00')
    } else {
      setDisplayMessage(BAD_SCORE_MESSAGES);
      setColorScreen('#FF0000')
    }
  };

  const onTryAgainClicked = () => {
    history.push("/");
  };
  useEffect(() => {
    generateMessage();
  }, []);

  return (
    <PageContainer>
      <ScoreContainer theme={{ main: colorScreen }}>
        <MotivationMessage>{displayMessage}</MotivationMessage>
        <ScoreMessage>Your score is {finalScore} out of 500</ScoreMessage>
        <TryAgainButton onClick={onTryAgainClicked}>Play again!</TryAgainButton>
      </ScoreContainer>
    </PageContainer>
  );
};

export default Score;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 50%;
  height: 200px;
  margin: auto;
  margin-bottom: 30px;
  background: ${props => props.theme.main};
  background-color: colorScreen;
  border-radius: 7px;
`;

const MotivationMessage = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: white;
`;

const ScoreMessage = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: white;
`;

const TryAgainButton = styled.button`
  height: 40px;
  width: 30%;
  margin-top: 30px;
  font-weight: 600;
  background-color: white;
  border-color: black;
  font-size: 16px;
  border-radius: 5px;
  color: black;
`;

