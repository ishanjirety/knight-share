import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
    name: 'globalState',
    initialState: {
        route: "Home"
    },
    reducers: {
        setRoute: (state, action) => {
            state.route = action.payload
        }
    }
})

export const { setRoute } = globalSlice.actions

export default globalSlice.reducer