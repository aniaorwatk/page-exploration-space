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
        <div className="quiz__box-questions">
          <ButtonReturn />
          <Quiz />

        </div>
      </div>
    </div>
  );
};

export default QuizPage;
