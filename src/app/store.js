import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeSlice from '../features/Home/homeSlice'
import globalSlice from '../features/globalSlice';
import searchSlice from '../features/Search/searchSlice';
import loginSlice from '../features/Login/loginSlice';
import PostSlice from '../features/CreatePost/creeatePostSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeSlice,
    globalState: globalSlice,
    search: searchSlice,
    login: loginSlice,
    postSlice: PostSlice
  },
});
