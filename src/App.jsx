import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default App;
