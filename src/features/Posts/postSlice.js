import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { updateLike } from './updateLike'
import { removeLike } from './removeLike'

export const addLike = createAsyncThunk('home/addLike', async ({ token, userId, postId }) => {
        
        const data = await updateLike(token, userId, postId)
        return data.data.Posts

})
export const deleteLike = createAsyncThunk('postLike/deleteLike', async ({ userId, postId, token }) => {
    const data = await removeLike(userId, postId, token)
    return data.data
})

export const likeSlice = createSlice({
    name: "postLike",
    initialState: {
        status: "idle",
    },
    extraReducers: {
        [addLike.pending]: (state) => {
            state.status = 'pending'
        },
        [addLike.fulfilled]: (state) => {
            state.status = 'fulfilled'
        },
        [addLike.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default likeSlice.reducer;