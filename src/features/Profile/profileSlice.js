import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserProfile } from './getUserProfile'
import { uploadImage } from '../CreatePost/uploadImage'
import { updateUserImage } from './updateUserImage'

export const getProfile = createAsyncThunk('profileSlice/getProfile', async ({ token, userId }) => {
    console.log(token, userId)
    const data = await getUserProfile(token, userId)
    console.log(data.data)
    return data.data
})
export const updateProfile = createAsyncThunk('profileSlice/updateProfile', async ({ image }) => {
    console.log(image)
    const data = await uploadImage(image)
    return data
})
export const updateProfileImageDB = createAsyncThunk('profile/updateProfileImageDB', async ({ userId, token, profileImg }) => {
    console.log( userId, token, profileImg)
    const data = await updateUserImage(token, userId, profileImg)
    return data.data

})

export const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        user: {},
        imageUrl: "",
        status: "idle"
    },
    extraReducers: {
        [getProfile.pending]: (state) => {
            state.status = 'pending'
        },
        [getProfile.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.user = action.payload.Users[0]
        },
        [getProfile.rejected]: (state) => {
            state.status = "rejected"
        },
        [updateProfile.pending]: (state) => {
            state.status = 'pending'
        },
        [updateProfile.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.imageUrl = action.payload
        },
        [updateProfile.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default profileSlice.reducer;