import React, { ReactNode } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import {
  selectQuestions,
  next,
  selectAciveQuestion,
  toggle,
  finished,
  selectFinished,
  selectMaxPonits,
  selectPoints,
} from "./quizSlice";
import ButtonPrimary from "../../component/Buttons/ButtonPrimary";

const Quiz = () => {
  const questions = useSelector(selectQuestions);
  const finishedQuiz = useSelector(selectFinished);
  const activeQuestion = useSelector(selectAciveQuestion);
  const maxPoints = useSelector(selectMaxPonits);
  const points = useSelector(selectPoints);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (finishedQuiz) return;

    if (questions[activeQuestion + 1]) {
      dispatch(next());
    } else {
      dispatch(finished());
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

  const handleToggle = (answerIndex: number) => () => {
    dispatch(toggle(answerIndex));
  };

  function refreshQuiz() {
    window.location.reload();
  }

  return (
    <div className="quizBox">
      {!finishedQuiz && (
        <>
          <p className="quizText">
            {activeQuestion + 1} / {questions.length}
          </p>
          <p className="quizText"> {questions[activeQuestion].content}</p>

          <List>
            {questions[activeQuestion].answers.map(
              (
                answer: {
                  content: ReactNode;
                  id: string | undefined;
                  checked: boolean | undefined;
                },
                index: number
              ) => (
                <ListItem disablePadding>
                  <ListItemButton onClick={handleToggle(index)} dense>
                    <Checkbox
                      edge="start"
                      checked={answer.checked}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": answer.id }}
                    />
                    <ListItemText className="quizAnswer" id={answer.id} primary={answer.content} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>

          {/* {questionElement} */}
          {/* {questions} */}
          {/* <p>
        {activeQuestion + 1} / {questions.length}
      </p>
      {questions[activeQuestion].content}

      <ul>
        {questions[activeQuestion].answers.map(
          (answer: {
            id: any;
            content:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            return <li key={`answer${answer.id}`}> {answer.content} </li>;
          }
        )}
      </ul> */}

          {/* {questions.content} */}
          <ButtonPrimary
            customClassName={"primary"}
            type={"button"}
            buttonLabel={"Next"}
            onClick={handleNext}
          />
        </>
      )}

      {finishedQuiz && (
        <>
          <p className="quizText result">
            Twój wynik to: {points} / {maxPoints}
          </p>
          <ButtonPrimary
            customClassName={"primary"}
            type={"button"}
            buttonLabel={"Refresh Quiz"}
            onClick={refreshQuiz}
          />
        </>
      )}
    </div>
  );
};
export default Quiz;
