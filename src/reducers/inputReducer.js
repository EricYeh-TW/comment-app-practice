import * as actionTypes from '../actions/actionTypes';

const initCommentState = {
  username: '',
  content: '',
};

export function inputReducer(state = initCommentState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USERNAME:
      return { ...state, username: action.payload };
    case actionTypes.CHANGE_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
}
