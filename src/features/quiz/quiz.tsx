import React, { Key, ReactNode } from "react";
import {
  selectQuestions,
  next,
  selectAciveQuestion,
  toggle,
  finished,
  selectFinished,
  selectMaxPonits, selectPoints
} from "./quizSlice";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

import ButtonPrimary from "../../component/Buttons/ButtonPrimary";

const Quiz = () => {
  const questions = useSelector(selectQuestions);
  const finishedQuiz = useSelector(selectFinished);
  const activeQuestion = useSelector(selectAciveQuestion);
  const maxPoints =useSelector(selectMaxPonits)
  const points=useSelector(selectPoints)
  const dispatch = useDispatch();
  // const actPlusOne = activeQuestion +1

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

  return (
    
   <div> 
    {!finishedQuiz && <>
    
      <p>
        {activeQuestion + 1} / {questions.length}
      </p>
      {questions[activeQuestion].content}

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {questions[activeQuestion].answers.map(
          (
            answer: {
              content: ReactNode;
              id: string | undefined;
              checked: boolean | undefined;
            },
            index: number
          ) => (
            <ListItem
              // key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  {/* <CommentIcon /> */}
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton onClick={handleToggle(index)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={answer.checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": answer.id }}
                  />
                </ListItemIcon>
                <ListItemText id={answer.id} primary={answer.content} />
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
        customClassName={"buttonPrimary"}
        type={"button"}
        buttonLabel={"Next"}
        onClick={handleNext}
      />
    </>}  


    {finishedQuiz && 
    <>
   Twój wynik to: {points} /{maxPoints} 
    </>}
    </div>
    
  );
};
export default Quiz;
