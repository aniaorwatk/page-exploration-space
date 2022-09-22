import {createSlice} from '@reduxjs/toolkit';

export interface IQuizStateType {
    question: string
}

const initialState: IQuizStateType = {
    question: "",
}

export const quizSlice = createSlice({

    name: 'quiz',
    initialState,
    reducers: {

    }
})

export default quizSlice.reducer
