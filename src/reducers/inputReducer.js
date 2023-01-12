import * as actionTypes from '../actions/actionTypes';

const initInputState = {
  username: '',
  content: '',
};

export function inputReducer(state = initInputState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USERNAME:
      return { ...state, username: action.payload };
    case actionTypes.CHANGE_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
}
