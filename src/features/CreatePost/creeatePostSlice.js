import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { uploadImage } from './uploadImage'
import { uploadPost } from './uploadPost'
export const updatePost = createAsyncThunk('createPostSlice/updatePost', async ({ image, caption, userId, token }) => {
    const data = await uploadPost(image, caption, userId, token)
    return data
})
export const updateImage = createAsyncThunk('createPostSlice/updateImage', async ({ image }) => {
    const data = await uploadImage(image)
    return data
})

const createPostSlice = createSlice({
    name: 'createPostSlice',
    initialState: {
        image: "",
        caption: "",
        userId: "",
        imageUploadStatus: "idle",
        postUploadStatus: "idle"
    },
    reducers: {
        addCaption: (state, action) => {
            state.caption = action.payload
        },
        addUserId: (state, action) => {
            state.userId = action.payload
        },
        resetInitialState: (state) => {
            state.image = ""
            state.caption = ""
            state.userId = ""
            state.imageUploadStatus = "idle"
            state.postUploadStatus = "idle"
        }
    },
    extraReducers: {
        [updatePost.fulfilled]: (state) => {
            state.postUploadStatus = "fulfilled"
        },
        [updatePost.pending]: (state) => {
            state.postUploadStatus = "pending"
        },
        [updatePost.rejected]: (state) => {
            state.postUploadStatus = "rejected"
        },
        [updateImage.fulfilled]: (state, action) => {
            state.imageUploadStatus = "fulfilled"
            state.image = action.payload
        },
        [updateImage.pending]: (state) => {
            state.imageUploadStatus = "pending"
        },
        [updateImage.rejected]: (state) => {
            state.imageUploadStatus = "rejected"
        }
    }
})

export const { addCaption, addUserId, resetInitialState } = createPostSlice.actions

export default createPostSlice.reducer