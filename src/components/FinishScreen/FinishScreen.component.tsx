import { Button } from "@mui/material";
import { GameResult } from "../QuestionsStepper/QuestionStepper.utils";
import {
  StyledFinishScreen,
  StyledItem,
  StyledList,
  StyledScore,
} from "./FinishScreen.styles";

interface Props {
  playAgain: () => void;
  result: GameResult[];
}

export const FinishScreen = ({ playAgain, result }: Props) => {
  const points = result.filter((item) => item.isCorrect).length;
  return (
    <StyledFinishScreen>
      <StyledScore>
        You score {points}&nbsp;{points === 1 ? "point" : "points"}
      </StyledScore>
      <StyledList>
        Your answers:
        {result.map((item, index) => (
          <StyledItem key={item.answer} isCorrect={item.isCorrect}>
            {index + 1}&nbsp;{item.answer}
          </StyledItem>
        ))}
      </StyledList>
      <Button onClick={playAgain} fullWidth>
        Play again
      </Button>
    </StyledFinishScreen>
  );
};
