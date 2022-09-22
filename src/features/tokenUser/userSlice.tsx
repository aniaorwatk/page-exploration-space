import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
    userToken: string
}

const initialState: UserState = {
    userToken: "",
}

export const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {
        sendToken: (state, action) => {
            state.userToken = action.payload;
        },
        removeToken: (state) => {
            state.userToken = ""
        }
    }
})

export const {sendToken,removeToken} = userSlice.actions
export const tokenUser = (state: { user: { [x: string]: any; }; }) => state.user.userToken
export default userSlice.reducer
