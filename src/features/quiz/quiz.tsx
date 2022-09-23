import React, { Key } from "react";
import { selectQuestions, next, selectAciveQuestion } from "./quizSlice";
import { useSelector, useDispatch } from "react-redux";
import ButtonPrimary from "../../component/Buttons/ButtonPrimary";

const Quiz = () => {
  const questions = useSelector(selectQuestions);
  const activeQuestion = useSelector(selectAciveQuestion);
  const dispatch =useDispatch();

  const handleNext = ()=>{
if(questions[])
  }

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
{questions[activeQuestion].content}
      <ButtonPrimary customClassName={"buttonPrimary"} type={"button"} buttonLabel={"Next"} onClick={()=> dispatch(next())}/>
    </div>
  );
};
export default Quiz;
