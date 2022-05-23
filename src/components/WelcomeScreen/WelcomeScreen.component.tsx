import { Button } from "@mui/material";
import { MainCard } from "../MainCard/MainCard.component";
import {
  StyledDescription,
  StyledTitle,
  StyledWelcome,
} from "./WelcomeScreen.styles";

interface Props {
  toggleGameOnStatus: () => void;
}

export const WelcomeScreen = ({ toggleGameOnStatus }: Props) => {
  return (
    <MainCard>
      <StyledWelcome>
        <StyledTitle>
          Welcome to the
          <br />
          QUIZ GAME
        </StyledTitle>
        <StyledDescription>
          You will get 5 questions where is only 1 correct answer. Click "Play"
          button to start the Quiz.
          <br />
          Good luck and have fun!
        </StyledDescription>
        <Button type="button" onClick={toggleGameOnStatus}>
          Play
        </Button>
      </StyledWelcome>
    </MainCard>
  );
};
