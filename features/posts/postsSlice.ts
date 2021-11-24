import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const keywordSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectPosts = (state: any) => state.posts.value;

export const { addPosts } = keywordSlice.actions;

export default keywordSlice.reducer;
