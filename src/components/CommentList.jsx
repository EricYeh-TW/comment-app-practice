import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Comment from './Comment';
import StyleList from '../styles/CommentList';
import { initComments } from '../actions/commentsAction';

const CommentList = () => {
  const comments = useSelector((state) => state.commentsReducer.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadComments = localStorage.getItem('comments');
    if (loadComments) dispatch(initComments(JSON.parse(loadComments)));
  }, []);

  return (
    <StyleList>
      {comments.map((comment, i) => (
        <Comment comment={comment} key={i} index={i} />
      ))}
    </StyleList>
  );
};

export default CommentList;
