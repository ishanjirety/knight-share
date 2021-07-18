import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authenticateUser } from './authenticateUser'
import { setToken } from '../../utils'
export const loginUser = createAsyncThunk('loginSlice/loginUser', async ({ username, password }) => {
    const data = await authenticateUser(username, password)
    if (data.errors) {
        return new Promise((resolve, reject) => reject())
    } else {
        return data.data
    }
})

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        status: 'idle',
        username: "john_doe",
        password: "john",
        data: "",
        loading: "Login"
    },
    reducers: {
        updateUsername: (state, action) => { state.username = action.payload },
        updatePassword: (state, action) => { state.password = action.payload }
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload?.Login
            state.loading = "Login"
        },
        [loginUser.rejected]: (state) => {
            state.status = "rejected"
            state.loading = "Login"
        },
        [loginUser.pending]: (state) => {
            state.status = "pending"
            state.loading = "Logging in..."
        },
    }
})

export const { updateUsername, updatePassword } = loginSlice.actions
export default loginSlice.reducer

