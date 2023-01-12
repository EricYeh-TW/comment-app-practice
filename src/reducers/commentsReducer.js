import * as actionTypes from '../actions/actionTypes';

const initCommentsState = {
  comments: [],
};

export function commentsReducer(state = initCommentsState, action) {
  switch (action.type) {
    case actionTypes.INIT_COMMENTS:
      return { comments: action.comments };
    case actionTypes.ADD_COMMENT:
      return { comments: [...state.comments, action.comment] };
    case actionTypes.DELETE_COMMENT:
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1),
        ],
      };
    default:
      return state;
  }
}
