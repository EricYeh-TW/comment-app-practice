import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #b4c6cb;
}
`;

const Wrapper = styled.div`
  width: 500px;
  margin: 10px auto;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  padding: 20px;
`;

class CommentApp extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <CommentInput />
        <CommentList />
      </Wrapper>
    );
  }
}

export default CommentApp;
