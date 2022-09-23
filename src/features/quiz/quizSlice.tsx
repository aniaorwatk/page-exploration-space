import { createSlice } from "@reduxjs/toolkit";

export interface IQuizStateType {
  activeQuestion: number;
  question: { content: string; answers: { id: number; content: string }[] }[];
}

const initialState: IQuizStateType = {
  activeQuestion: 0,
  question: [
    {
      content: "Who was the first person in space?",
      answers: [
        { id: 1, content: "Neil Armstrong" },
        { id: 2, content: "Yuri Gagarin xxx" },
        { id: 3, content: "Helen Sharman" },
      ],
    },
    {
      content: "On which planet could you jump the highest?",
      answers: [
        { id: 1, content: "Jupiter" },
        { id: 2, content: "Mercury xxxxx" },
        { id: 3, content: "Mars" },
      ],
    },
    {
      content: "How many people have spent more than 700 days in space?",
      answers: [
        { id: 1, content: "3" },
        { id: 2, content: "5" },
        { id: 3, content: "6 xx" },
      ],
    },
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
