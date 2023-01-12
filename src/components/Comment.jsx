import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyleComment from '../styles/Comment';
import PropTypes from 'prop-types';
import { deleteComment } from '../actions/commentsAction';

const Comment = (props) => {
  const { comment, index } = props;
  const [timeString, setTimeString] = useState('');
  const comments = useSelector((state) => state.commentsReducer.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    _updateTimeString();
    const _timer = setInterval(_updateTimeString, 5000);
    return () => {
      clearInterval(_timer);
    };
  }, []);

  const _updateTimeString = () => {
    const newTime = Date.now();
    const duration = Math.floor((newTime - comment.time) / 1000);
    setTimeString(duration > 60 ? `${Math.round(duration / 60)}分鐘前` : `${Math.max(duration, 1)}秒前`);
  };

  const handleDeleteComment = () => {
    const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
    localStorage.setItem('comments', JSON.stringify(newComments));
    dispatch(deleteComment(index));
  };

  return (
    <StyleComment>
      <div className="comment-user">
        <span>{comment.username} </span>:
      </div>
      <p>{comment.content}</p>
      <span className="comment-createdtime">{timeString}</span>
      <span className="comment-delete" onClick={handleDeleteComment}>
        刪除
      </span>
    </StyleComment>
  );
};

Comment.defaultProps = {
  comment: {},
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.number,
  }),
  index: PropTypes.any,
  onDeleteComment: PropTypes.func,
};

export default Comment;
