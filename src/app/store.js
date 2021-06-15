import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeSlice from '../features/Home/homeSlice'
import globalSlice from '../features/globalSlice';
import searchSlice from '../features/Search/searchSlice';
import loginSlice from '../features/Login/loginSlice';
import PostSlice from '../features/CreatePost/creeatePostSlice'
import likeSlice from '../features/Posts/postSlice'
import profileSlice from '../features/Profile/profileSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeSlice,
    globalState: globalSlice,
    search: searchSlice,
    login: loginSlice,
    postSlice: PostSlice,
    likeSlice: likeSlice,
    profileSlice: profileSlice
  },
});
