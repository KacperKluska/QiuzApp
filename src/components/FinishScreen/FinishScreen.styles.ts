import styled from "styled-components";

export const StyledFinishScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: 400px;

  font-weight: bold;
`;

export const StyledScore = styled.div`
  font-size: 2rem;
`;

export const StyledList = styled.ul`
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

export const StyledItem = styled.li<{ isCorrect: boolean }>`
  font-size: 1rem;
  color: ${({ isCorrect }) => (isCorrect ? "green" : "red")};
`;
