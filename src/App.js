import React, { useState } from "react";
import { questions } from "./data/questions";
import Result from "./components/Result";
import Question from "./components/Question";
import "./styles/App.css"

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerSelection = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };
  return (
    <div className="app-container">
      {isFinished ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          data={questions[currentQuestion]}
          onAnswer={handleAnswerSelection}
        />
      )}
    </div>
  );
};

export default App;
