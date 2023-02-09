import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { changeContent, changeUsername } from '../actions/inputAction';
// import { addComment } from '../actions/commentsAction';
import { changeUsername, changeContent } from '../slices/inputSlice';
import { addComment } from '../slices/commentsSlice';

let comment = {
  username: '',
  content: '',
  time: 0,
};

export const useChangeUsername = () => {
  const username = useSelector((state) => state.inputReducer.username);
  const dispatch = useDispatch();

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) handleUserNameChange(username);
  }, []);

  const handleUserNameChange = (username) => {
    localStorage.setItem('username', username);
    dispatch(changeUsername(username));
  };

  comment = { ...comment, username };
  return [username, handleUserNameChange];
};

export const useChangeContent = () => {
  const content = useSelector((state) => state.inputReducer.content);
  const dispatch = useDispatch();

  const handleContentChange = (content) => {
    dispatch(changeContent(content));
  };

  comment = { ...comment, content };
  return [content, handleContentChange];
};

export const useSubmit = () => {
  const comments = useSelector((state) => state.commentsReducer.comments);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    comment = { ...comment, time: Date.now() };
    const newComments = [...comments, comment];

    if (comment.username === '' || comment.content === '') return alert('請輸入用戶名稱及內容');
    localStorage.setItem('comments', JSON.stringify(newComments));
    dispatch(addComment(comment));
    dispatch(changeContent(''));
  };

  return [handleSubmit];
};

useSubmit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
