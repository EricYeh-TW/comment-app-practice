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
    console.log(comment);
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <CommentInput onSubmit={this.handleCommentSubmit.bind(this)} />
        <CommentList />
      </Wrapper>
    );
  }
}

export default CommentApp;
