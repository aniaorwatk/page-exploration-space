import { createSlice } from "@reduxjs/toolkit";

export interface IQuizStateType {
  activeQuestion: number;
  question: { content: string }[];
  // question: string
}

const initialState: IQuizStateType = {
  // question: "Who was the first person in space?"
  activeQuestion: 0,
  question: [
    // { id: 1, content: "Who was the first person in space?" },
    // { id: 2, content: "On which planet could you jump the highest?" },
    // { id: 3,content: "How many people have spent more than 700 days in space?"
    // },
    { content: "Who was the first person in space?" },
    { content: "On which planet could you jump the highest?" },
    { content: "How many people have spent more than 700 days in space?" },
  ],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  //   : IQuizStateType ={
  //     activeQuestion: 1,
  //     question: [
  //       { id: 1, content: "Who was the first person in space?" },
  //       { id: 2, content: "On which planet could you jump the highest?" },
  //       { id: 3,content: "How many people have spent more than 700 days in space?"
  //       },
  //     ],

  reducers: {
    next: (state) => {
      state.activeQuestion += 1;
    },
  },
});

export const { next } = quizSlice.actions;

export const selectQuestions = (state: { quiz: { question: any } }) =>
  state.quiz.question;

export const selectAciveQuestion = (state: {
  quiz: {
    question: any;
    activeQuestion: string | number;
  };
}) => state.quiz.question;

export default quizSlice.reducer;

// Neil Armstrong
// Yuri Gagarin xxx
// Helen Sharman

// Jupiter
// Mercury xxxxx
// Mars

// 3
// 5
// 6 xxxxx
