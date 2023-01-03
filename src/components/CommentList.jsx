import React, { Component } from 'react';
import Comment from './Comment';
import StyleList from '../layout/CommentList';

class CommentList extends Component {
  render() {
    let comments = [
      { username: 'test1', content: 'test1' },
      { username: 'test2', content: 'test2' },
      { username: 'test3', content: 'test3' },
    ];

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
