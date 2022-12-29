import React, { Component } from 'react';
import styled from 'styled-components';

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
      </div>
    );
  }
}

export default App;
