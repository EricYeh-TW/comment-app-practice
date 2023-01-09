import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import StyleList from '../styles/CommentList';

const CommentList = (props) => {
  const { comments, onDeleteComment } = props;

  const handleDeleteComment = (index) => {
    if (onDeleteComment) onDeleteComment(index);
  };

  return (
    <StyleList>
      {comments.map((comment, i) => (
        <Comment comment={comment} key={i} index={i} onDeleteComment={(index) => handleDeleteComment(index)} />
      ))}
    </StyleList>
  );
};

CommentList.defaultProps = {
  comments: [],
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      content: PropTypes.string,
      time: PropTypes.number,
    }),
  ),
  onDeleteComment: PropTypes.func.isRequired,
};

export default CommentList;
