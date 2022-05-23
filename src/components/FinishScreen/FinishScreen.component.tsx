import { Button } from "@mui/material";
import { GameResult } from "../QuestionsStepper/QuestionStepper.utils";

interface Props {
  playAgain: () => void;
  result: GameResult[];
}

export const FinishScreen = ({ playAgain, result }: Props) => {
  const points = result.filter((item) => item.isCorrect).length;
  return (
    <div>
      <div>Your score is {points}/5</div>
      Your answers:
      <ul>
        {result.map((item) => (
          <li key={item.answer}>{item.answer}</li>
        ))}
      </ul>
      <Button onClick={playAgain}>Play again</Button>
    </div>
  );
};
