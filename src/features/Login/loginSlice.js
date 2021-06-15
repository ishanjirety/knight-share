import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authenticateUser } from './authenticateUser'

export const loginUser = createAsyncThunk('loginSlice/loginUser', async ({ username, password }) => {
    const data = await authenticateUser(username, password)
    return data.data
})

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        status: 'idle',
        username: "",
        password: "",
        data: ""
    },
    reducers: {
        updateUsername: (state, action) => { state.username = action.payload },
        updatePassword: (state, action) => { state.password = action.payload }
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload.Login
        },
        [loginUser.rejected]: (state) => {
            state.status = "rejected"
        },
        [loginUser.pending]: (state) => { state.status = "pending" },
    }
})

export const { updateUsername, updatePassword } = loginSlice.actions
export default loginSlice.reducer

