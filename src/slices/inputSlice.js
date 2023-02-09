import { createSlice } from '@reduxjs/toolkit';

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    username: '',
    content: '',
  },
  reducers: {
    changeUsername: (state, action) => {
      state.username = action.payload;
    },
    changeContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { changeUsername, changeContent } = inputSlice.actions;

export default inputSlice.reducer;
