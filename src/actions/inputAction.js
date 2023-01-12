import * as actionTypes from './actionTypes';

export const changeUsername = (username) => {
  return {
    type: actionTypes.CHANGE_USERNAME,
    payload: username,
  };
};

export const changeContent = (content) => {
  return {
    type: actionTypes.CHANGE_CONTENT,
    payload: content,
  };
};
