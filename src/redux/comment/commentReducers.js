import * as actionTypes from './commentActionTypes';

const initState = {
  comments: [],
};

export default function commentReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.INIT_COMMENTS:
      return { comments: action.comments };

    case actionTypes.ADD_COMMENTS:
      return { comments: [...state.comments, action.comments] };

    case actionTypes.DELETE_COMMENTS:
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
