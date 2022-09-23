import { createSlice } from "@reduxjs/toolkit";

export interface IQuizStateType {
  question: { id: number; content: string }[];
  // question: string
}

const initialState: IQuizStateType = {
  // question: "Who was the first person in space?"

  question: [
    { id: 1, content: "Who was the first person in space?" },
    { id: 2, content: "On which planet could you jump the highest?" },
    { id: 3,content: "How many people have spent more than 700 days in space?",
    },
  ],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

export const selectQuestions = (state: { quiz: { question: any } }) =>
  state.quiz.question;

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
