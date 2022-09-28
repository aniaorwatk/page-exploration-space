import { createSlice } from "@reduxjs/toolkit";

export interface IQuizStateType {
  activeQuestion: number;
  finished: boolean;
  questions: {
    content: string;
    answers: {
      id: number;
      content: string;
      checked: boolean;
      points: number;
    }[];
  }[];
}

const initialState: IQuizStateType = {
  activeQuestion: 0,
  finished: false,
  questions: [
    {
      content: "Who was the first person in space?",
      answers: [
        { id: 1, content: "Neil Armstrong", checked: false, points: 0 },
        { id: 2, content: "Yuri Gagarin xxx", checked: false, points: 1 },
        { id: 3, content: "Helen Sharman", checked: false, points: 0 },
      ],
    },
    {
      content: "On which planet could you jump the highest?",
      answers: [
        { id: 1, content: "Jupiter", checked: false, points: 0 },
        { id: 2, content: "Mercury xxxxx", checked: false, points: 1 },
        { id: 3, content: "Mars", checked: false, points: 0 },
      ],
    },
    {
      content: "How many people have spent more than 700 days in space?",
      answers: [
        { id: 1, content: "3", checked: false, points: 0 },
        { id: 2, content: "5", checked: false, points: 0 },
        { id: 3, content: "6 xx", checked: false, points: 1 },
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
    toggle: (state, action) => {
      const question = state.questions[state.activeQuestion];
      question.answers[action.payload].checked =
        !question.answers[action.payload].checked;
    },
    finished: (state) => {
      state.finished = true;
    },
  },
});

export const { next, toggle, finished } = quizSlice.actions;

export const selectQuestions = (state: {
  quiz: { questions: { [x: string]: any } };
}) => state.quiz.questions;

export const selectActive = (state: {
  quiz: { questions: { [x: string]: any } };
}) => state.quiz.questions;

export const selectAciveQuestion = (state: {
  quiz: {
    question: any;
    questions: { [x: string]: any };
    activeQuestion: number;
  };
}) => state.quiz.activeQuestion;

export const selectFinished = (state: { quiz: { finished: boolean } }) =>
  state.quiz.finished;

export const selectMaxPonits = (state: {
  [x: string]: any;
  questions: { [x: string]: any };
}) => {
  let maxPoints = 0;

  state.quiz.questions.forEach(
    (question: {
      answers: {
        filter: (arg0: (answer: { points: number }) => boolean) => {
          (): any;
          new (): any;
          length: number;
        };
      };
    }) => {
      maxPoints += question.answers.filter(
        (answer: { points: number }) => answer.points > 0
      ).length;
    }
  );
  return maxPoints;
};
export const selectPoints = (state: { quiz: { questions: any[] } }) => {
  let points = 0;

  state.quiz.questions.forEach(
    (question: {
      answers: {
        filter: (
          arg0: (answer: { checked: boolean; points: number }) => any
        ) => { (): any; new (): any; length: number };
      };
    }) => {
      points += question.answers.filter(
        (answer) => answer.points > 0 && answer.checked
      ).length;
    }
  );

  return points;
};

export default quizSlice.reducer;
