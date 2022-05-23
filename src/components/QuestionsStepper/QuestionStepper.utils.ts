import { QuestionDataResponse } from "../Question/Question.interface";
import { GameResult } from "./QuestionStepper.interface";

export const isEveryAnswerChecked = (answers: string[]) => {
  return answers.find((answer) => answer === "") !== "";
};

export const checkResult = (
  answers: string[],
  questions: QuestionDataResponse[]
): GameResult[] => {
  return answers.map((answer, index) => {
    return {
      answer,
      isCorrect: answer === questions[index].correct_answer ? true : false,
    };
  });
};
