import { configureStore } from "@reduxjs/toolkit";
import keywordReducer from "./features/keyword/kewordSlice";
import postsReducer from "./features/posts/postsSlice";

const store = configureStore({
  reducer: {
    keyword: keywordReducer,
    posts: postsReducer,
  },
});

export default store;
