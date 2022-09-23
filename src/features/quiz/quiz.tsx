import React, { Key } from "react";
import { selectQuestions } from "./quizSlice";
import { useSelector } from "react-redux";

const Quiz = () => {
  const questions = useSelector(selectQuestions);
  const questionElement = questions.map(
    (quest: {
      id: React.Key | null | undefined;
      content:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
    }) => {
      return <p key={quest.id}>{quest.content} </p>;
    }
  );

  // console.log(questions);
  return (
    <div>
      {questionElement}
    </div>
  );
};
export default Quiz;
