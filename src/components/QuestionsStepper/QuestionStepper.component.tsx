import { useEffect, useState } from "react";
import { MainCard } from "../MainCard/MainCard.component";
import { Question } from "../Question/Question.component";
import { QuestionDataResponse } from "../Question/Question.interface";
import { StyledStepper } from "./QuestionStepper.styles";
import { concatAnswers } from "../Question/Question.utils";
import { ProgressStepper } from "../ProgressStepper/ProgressStepper.component";
import { checkResult, isEveryAnswerChecked } from "./QuestionStepper.utils";
import { FinishScreen } from "../FinishScreen/FinishScreen.component";
import { Button } from "@mui/material";

interface Props {
  questions: QuestionDataResponse[] | null;
  toggleGameOnStatus: () => void;
}

const initialUserAnswers = ["", "", "", "", ""];

export const QuestionStepper = ({ questions, toggleGameOnStatus }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialUserAnswers);
  const [canFinish, setCanFinish] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const toggleGameFinishedStatus = () => {
    setGameFinished((prev) => !prev);
  };

  const playAgain = () => {
    setCanFinish(false);
    setActiveStep(0);
    setUserAnswers(initialUserAnswers);
    toggleGameOnStatus();
    setGameFinished(false);
  };

  useEffect(() => {
    const result = isEveryAnswerChecked(userAnswers);
    if (result) setCanFinish(true);
  }, [userAnswers]);

  const handleSetUserAnswer = (index: number, answer: string) => {
    setUserAnswers((prev) => {
      const temp = [...prev];
      temp[index] = answer;
      return temp;
    });
  };

  const [answers] = useState(
    questions?.map((question) =>
      concatAnswers(question.incorrect_answers, question.correct_answer)
    )
  );

  const handleNextQuestion = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    setActiveStep((prev) => prev - 1);
  };

  if (!questions || !answers) return null;

  return (
    <MainCard>
      {!gameFinished ? (
        <div>
          <StyledStepper>
            <Question
              {...questions[activeStep]}
              answers={answers[activeStep]}
              userAnswers={userAnswers}
              handleSetUserAnswer={handleSetUserAnswer}
              index={activeStep}
            />
            <ProgressStepper
              size={questions.length}
              activeStep={activeStep}
              handleNextQuestion={handleNextQuestion}
              handlePrevQuestion={handlePrevQuestion}
            />
          </StyledStepper>
          <Button
            onClick={toggleGameFinishedStatus}
            fullWidth
            disabled={!canFinish}
          >
            Finish the game!
          </Button>
        </div>
      ) : (
        <FinishScreen
          playAgain={playAgain}
          result={checkResult(userAnswers, questions)}
        />
      )}
    </MainCard>
  );
};
