import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getUserPosts } from './getUserPosts'

export const getPosts = createAsyncThunk('home/getPosts', async ({ token, userId }) => {
    console.log(token, userId)
    const data = await getUserPosts(token, userId)
    return data.data.Posts
})

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        posts: [],
        user: {},
        status: "idle"
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'pending'
        },
        [getPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        },
        [getPosts.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export const { addPosts } = homeSlice.actions;
export default homeSlice.reducer;