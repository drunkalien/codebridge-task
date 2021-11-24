import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

const keywordSlice = createSlice({
  name: "keyword",
  initialState,
  reducers: {
    addKeyword: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectKeyword = (state: any) => state.keyword.value;

export const { addKeyword } = keywordSlice.actions;

export default keywordSlice.reducer;
