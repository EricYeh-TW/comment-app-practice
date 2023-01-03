import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import GlobalStyle from '../layout/GlobalStyle';
import Wrapper from '../layout/CommentApp';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  handleCommentSubmit(comment) {
    let comments = this.state.comments;
    this.setState(
      {
        comments: [...comments, comment],
      },
      () => console.log(this.state.comments),
    );
  }

  render() {
    const { comments } = this.state;

    return (
      <Wrapper>
        <GlobalStyle />
        <CommentInput onSubmit={this.handleCommentSubmit.bind(this)} />
        <CommentList comments={comments} />
      </Wrapper>
    );
  }
}

export default CommentApp;
