import React, { Component } from 'react';
import StyleComment from '../layout/comment';

class Comment extends Component {
  render() {
    return (
      <StyleComment>
        <div className="comment-user">
          <span>{this.props.comment.username} </span>:
        </div>
        <p>{this.props.comment.content}</p>
      </StyleComment>
    );
  }
}

export default Comment;
