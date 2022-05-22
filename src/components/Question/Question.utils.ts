export const concatAnswers = (
  incorrectAnswers: string[],
  correctAnswer: string
) => {
  let answers = [...incorrectAnswers];
  const max = Math.floor(incorrectAnswers.length + 1);
  const correctAnswerIndex = Math.floor(Math.random() * max);
  answers.splice(correctAnswerIndex, 0, correctAnswer);
  return answers;
};

export const HTMLParser = (text: string) => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(
    `<!doctype html><body>${text}`,
    "text/html"
  ).body.textContent;
  return decodedString;
};
