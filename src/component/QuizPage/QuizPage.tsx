import React from "react";
import Quiz from "../../features/quiz/quiz";
import ButtonReturn from "../Buttons/ButtonReturn/ButtonReturn";
import Header from "../Header/Header";
import "./QuizPage.scss";

const QuizPage = () => {
  return (
    <div className="quiz">
    <Header />  
      <div className="quiz__box">
        
        <ButtonReturn />
        <Quiz />
      </div>
    </div>
  );
};

export default QuizPage;
