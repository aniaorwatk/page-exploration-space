import React, { Key } from "react";
import { selectQuestions, next, selectAciveQuestion } from "./quizSlice";
import { useSelector, useDispatch } from "react-redux";
import ButtonPrimary from "../../component/Buttons/ButtonPrimary";

const Quiz = () => {
  const questions = useSelector(selectQuestions);
  const activeQuestion = useSelector(selectAciveQuestion);
  const dispatch = useDispatch();
  // const actPlusOne = activeQuestion +1 

  const handleNext = () => {
    if (questions[activeQuestion +1]) {
      dispatch(next());
    } else {

    }
  };


  // const questionElement = questions.map(
  //   (quest: {
  //     id: React.Key | null | undefined;
  //     content:
  //       | string
  //       | number
  //       | boolean
  //       | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  //       | React.ReactFragment
  //       | React.ReactPortal
  //       | null
  //       | undefined;
  //   }) => {
  //     return <p key={quest.id}>{quest.content} </p>;
  //   }
  // );

  // console.log(questions);
  return (
    <div>
      {/* {questionElement} */}
      {/* {questions} */}
      <p>{activeQuestion +1} / {questions.length}</p>
      {questions[activeQuestion].content}
      {/* {questions.content} */}
      <ButtonPrimary
        customClassName={"buttonPrimary"}
        type={"button"}
        buttonLabel={"Next"}
        onClick={handleNext}
      />
    </div>
  );
};
export default Quiz;
