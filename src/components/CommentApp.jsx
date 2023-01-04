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

  componentDidMount() {
    this._loadComments();
  }

  handleCommentSubmit = (comment) => {
    const { comments } = this.state;
    comments.push(comment);
    this.setState({ comments });
    this._saveComments(comments);
  };

  _saveComments = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments));
  };

  _loadComments = () => {
    if (localStorage.getItem('comments')) {
      const comments = localStorage.getItem('comments');
      this.setState({ comments: JSON.parse(comments) });
    }
  };

  handleDeleteComment = (index) => {
    const { comments } = this.state;
    const newComments = [...comments.splice(0, index), ...comments.splice(index + 1)];
    this.setState({ comments: newComments });
    this._saveComments(newComments);
  };

  render() {
    const { comments } = this.state;

    return (
      <Wrapper>
        <GlobalStyle />
        <CommentInput onSubmit={this.handleCommentSubmit} />
        <CommentList
          comments={comments}
          onDeleteComment={(index) => this.handleDeleteComment(index)}
        />
      </Wrapper>
    );
  }
}

export default CommentApp;
