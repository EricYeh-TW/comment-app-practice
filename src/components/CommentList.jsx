import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import StyleList from '../layout/CommentList';

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  };

  static propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        content: PropTypes.string,
      }),
    ),
  };

  render() {
    const { comments } = this.props;

    return (
      <StyleList>
        {comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </StyleList>
    );
  }
}

export default CommentList;
