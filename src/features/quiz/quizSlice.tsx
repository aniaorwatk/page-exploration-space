import { createSlice } from "@reduxjs/toolkit";

export interface IQuizStateType {
  activeQuestion: number;
  question: { content: string ; answers: {content:  string  }[]}[];

}

const initialState: IQuizStateType = {
  activeQuestion: 0,
  question: [
    {
      content: "Who was the first person in space?",
      answers: [
        { content: "Neil Armstrong" },
        { content: "Yuri Gagarin xxx" },
        { content: "Helen Sharman" },
      ],
    },
    { content: "On which planet could you jump the highest?",
    answers: [
        { content: "Jupiter" },
        { content: "Mercury xxxxx" },
        { content: "Mars" },
      ],},
    { content: "How many people have spent more than 700 days in space?",
    answers: [
        { content: "3" },
        { content: "5" },
        { content: "6 xx" },
      ],}, 
  ],
};


export const quizSlice = createSlice({
  name: "quiz",
  initialState,

  reducers: {
    next: (state) => {
      state.activeQuestion += 1;
    },

  },
});

export const { next } = quizSlice.actions;

export const selectQuestions = (state: { quiz: { question: any } }) =>
  state.quiz.question;

export const selectActive = (state: { quiz: { question: any } }) =>
  state.quiz.question;

export const selectAciveQuestion = (state: {
  quiz: {
    question: any;
    questions: { [x: string]: any };
    activeQuestion: number;
  };
}) => state.quiz.activeQuestion;

export default quizSlice.reducer;

