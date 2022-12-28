import React, { Component } from 'react';
import styled from 'styled-components';
import imgUrl from './img/test.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px sold #000;
  color: white;
  background-color: lightblue;
  text-align: center;

  .item {
    width: 50px;
    height: 50px;
    background-color: orange;
    margin: 1rem;

    &:hover {
      background-color: green;
    }
  }
`;

const TestImage = styled.div`
  img {
    width: 500px;
    height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

function App() {
  return (
    <div className="App">
      <p>test</p>
      <Test />
    </div>
  );
}

class Test extends Component {
  constructor() {
    super();
    this.state = {
      content: 'i am children',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        <Container>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
        </Container>
        <TestImage>
          <img src={imgUrl} alt="test" />
        </TestImage>
      </div>
    );
  }
}

export default App;
