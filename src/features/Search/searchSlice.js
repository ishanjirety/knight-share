import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getSearchResults } from '../../graphql'
import { searchProfiles } from './searchProfiles';


export const fetchUser = createAsyncThunk("posts/fetchUser", async ({ query, token }) => {
    const data = await searchProfiles(query, token)
    console.log(data)
    return data;
});


export const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        searchQuery: "",
        profiles: [],
        status: "idle"
    },
    reducers: {
        search: (state, action) => {
            state.searchQuery = action.payload
        },
        populateProfiles: (state, action) => {
            state.profiles = action.payload
        },
        resetProfiles: (state) => {
            state.profiles = []
        }
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.profiles = action.payload.Users
        },
        [fetchUser.pending]: (state) => {
            state.status = "pending"
        },
        [fetchUser.rejected]: (state) => {
            state.status = "rejected"
        },

    }
})

export const { search, populateProfiles, resetProfiles } = searchSlice.actions
export default searchSlice.reducer