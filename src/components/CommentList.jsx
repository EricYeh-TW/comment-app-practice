import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import StyleList from '../layout/CommentList';

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  };

  static propTypes = {
    comments: PropTypes.array,
  };

  constructor() {
    super();
  }

  render() {
    // let comments = [
    //   { username: 'test1', content: 'test1' },
    //   { username: 'test2', content: 'test2' },
    //   { username: 'test3', content: 'test3' },
    // ];
    const comments = this.props.comments;

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
