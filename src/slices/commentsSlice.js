import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
  },
  reducers: {
    initComments: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    deleteComment: (state, action) => {
      state.comments = [...state.comments.slice(0, action.payload), ...state.comments.slice(action.payload + 1)];
    },
  },
});

export const { initComments, addComment, deleteComment } = commentsSlice.actions;

export default commentsSlice.reducer;
