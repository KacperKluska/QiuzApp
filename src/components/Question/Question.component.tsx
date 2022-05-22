import { FormControl, Radio, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { QuestionDataResponse } from "./Question.interface";
import { StyledQuestionBody } from "./Question.styles";
import { HTMLParser } from "./Question.utils";

const letters = ["a", "b", "c", "d", "e", "f"];

// TODO make new type for this Props or just Props interface
export const Question = ({
  category,
  question,
  answers,
}: QuestionDataResponse & { answers: string[] }) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <StyledQuestionBody>
      <span>{HTMLParser(category)}</span>
      <div>{HTMLParser(question)}</div>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleChange}
          value={value}
        >
          {answers.map((answer, index) => (
            <FormControlLabel
              value={HTMLParser(answer)}
              control={<Radio />}
              label={HTMLParser(`${letters[index]})&nbsp;${answer}`)}
              key={HTMLParser(answer)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </StyledQuestionBody>
  );
};
