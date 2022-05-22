import { Button } from "@mui/material";
import { MainCard } from "../MainCard/MainCard.component";
import { StyledTitle, StyledWelcome } from "./WelcomeScreen.styles";

interface Props {
  toggleGameStatus: () => void;
}

export const WelcomeScreen = ({ toggleGameStatus }: Props) => {
  return (
    <MainCard>
      <StyledWelcome>
        <StyledTitle>
          Welcome to the
          <br />
          QUIZ GAME
        </StyledTitle>
        <div>
          You will get 5 questions where only 1 answer is correct. Click "Play"
          button to start the Quiz. Good luck and have fun!
        </div>
        <Button type="button" onClick={toggleGameStatus}>
          Play
        </Button>
      </StyledWelcome>
    </MainCard>
  );
};
