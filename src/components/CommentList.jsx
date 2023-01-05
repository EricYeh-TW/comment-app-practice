import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import StyleList from '../styles/CommentList';

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  };

  static propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        content: PropTypes.string,
        time: PropTypes.number,
      }),
    ),
    onDeleteComment: PropTypes.func,
  };

  handleDeleteComment = (index) => {
    const { onDeleteComment } = this.props;
    if (onDeleteComment) onDeleteComment(index);
  };

  render() {
    const { comments } = this.props;

    return (
      <StyleList>
        {comments.map((comment, i) => (
          <Comment
            comment={comment}
            key={i}
            index={i}
            onDeleteComment={(index) => this.handleDeleteComment(index)}
          />
        ))}
      </StyleList>
    );
  }
}

export default CommentList;
