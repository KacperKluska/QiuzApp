import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MainCard } from "./components/MainCard/MainCard.component";
import { QuestionDataResponse } from "./components/Question/Question.interface";
import { QuestionStepper } from "./components/QuestionsStepper/QuestionStepper.component";
import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen.component";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: gray;
`;

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState<QuestionDataResponse[] | null>(
    null
  );

  const toggleGameStatus = () => {
    setGameOn((prev) => !prev);
  };

  const getQuestion = async () => {
    const {
      data: { results },
      status,
    } = await axios.get("https://opentdb.com/api.php?amount=5");
    status !== 200 ? setError(true) : setQuestions(results);
  };

  useEffect(() => {
    try {
      getQuestion();
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (error)
    return (
      <Layout>
        <MainCard>There was an Error. Try to play later.</MainCard>
      </Layout>
    );

  return (
    <Layout>
      {!gameOn ? (
        <WelcomeScreen toggleGameStatus={toggleGameStatus} />
      ) : (
        <QuestionStepper questions={questions} />
      )}
    </Layout>
  );
}

export default App;
