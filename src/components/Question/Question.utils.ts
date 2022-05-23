export const concatAnswers = (
  incorrectAnswers: string[],
  correctAnswer: string
) => {
  let answers = [...incorrectAnswers];
  const correctAnswerIndex = Math.floor(
    Math.random() * Math.floor(incorrectAnswers.length + 1)
  );
  answers.splice(correctAnswerIndex, 0, correctAnswer);
  return answers;
};

export const HTMLParser = (text: string) => {
  const parser = new DOMParser();
  return parser.parseFromString(`<!doctype html><body>${text}`, "text/html")
    .body.textContent;
};
