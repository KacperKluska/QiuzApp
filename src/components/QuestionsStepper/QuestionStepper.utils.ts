import { QuestionDataResponse } from "../Question/Question.interface";

export interface GameResult {
  answer: string;
  isCorrect: boolean;
}

export const isEveryAnswerChecked = (answers: string[]) => {
  return answers.filter((answer) => answer === "").length === 0;
};

export const checkResult = (
  answers: string[],
  questions: QuestionDataResponse[]
): GameResult[] => {
  return answers.map((answer, index) =>
    answer === questions[index].correct_answer
      ? { answer, isCorrect: true }
      : { answer, isCorrect: false }
  );
};
