import * as actionTypes from './commentActionTypes';

export const initComments = (comments) => {
  return { type: actionTypes.INIT_COMMENTS, comments };
};

export const addComment = (comment) => {
  return { type: actionTypes.ADD_COMMENTS, comment };
};

export const deleteComment = (commentIndex) => {
  return { type: actionTypes.DELETE_COMMENTS, commentIndex };
};
