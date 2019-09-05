import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  add = () => {
    const value = this.countSelect.value * 1;
    const count = this.state.count + value;
    this.setState({
      count
    });
  };

  subtract = () => {
    const value = this.countSelect.value * 1;
    const count = this.state.count - value;
    this.setState({
      count
    });
  };

  addIf = () => {
    const value = this.countSelect.value * 1;
    const count = this.state.count + value;
    if ((count + value) % 2 === 0) {
      this.setState({
        count
      });
    }
  };

  addAsync = () => {
    const value = this.countSelect.value * 1;
    setTimeout(() => {
      const count = this.state.count + value;
      this.setState({
        count
      });
    }, 1000);
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>timer:{count}</div>
        <div>
          <select ref={select => (this.countSelect = select)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.add}>+</button> <button onClick={this.subtract}>-</button>
          <button onClick={this.addIf}>increment if add</button>
          <button onClick={this.addAsync}>increment async</button>
        </div>
      </div>
    );
  }
}

export default App;
