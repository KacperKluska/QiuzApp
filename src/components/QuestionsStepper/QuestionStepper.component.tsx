import { Button, MobileStepper, useTheme } from "@mui/material";
import { useState } from "react";
import { MainCard } from "../MainCard/MainCard.component";
import { Question } from "../Question/Question.component";
import { QuestionDataResponse } from "../Question/Question.interface";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { StyledStepper } from "./QuestionStepper.styles";
import { concatAnswers } from "../Question/Question.utils";

interface Props {
  questions: QuestionDataResponse[] | null;
}

export const QuestionStepper = ({ questions }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [questionsItems] = useState(
    questions?.map((question) => (
      <Question
        {...question}
        answers={concatAnswers(
          question.incorrect_answers,
          question.correct_answer
        )}
      />
    ))
  );
  const theme = useTheme();

  const handleNextQuestion = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    setActiveStep((prev) => prev - 1);
  };

  if (!questions || !questionsItems) return null;

  // TODO move MobileStepper to his own component
  return (
    <MainCard>
      <StyledStepper>
        <div>{questionsItems[activeStep]}</div>
        <MobileStepper
          variant="progress"
          steps={questions.length}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 0 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNextQuestion}
              disabled={activeStep === questions.length - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handlePrevQuestion}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </StyledStepper>
    </MainCard>
  );
};
