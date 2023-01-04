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

  handleCommentSubmit = (comment) => {
    const { comments } = this.state;
    this.setState({
      comments: [...comments, comment],
    });
  };

  render() {
    const { comments } = this.state;

    return (
      <Wrapper>
        <GlobalStyle />
        <CommentInput onSubmit={this.handleCommentSubmit} />
        <CommentList comments={comments} />
      </Wrapper>
    );
  }
}

export default CommentApp;
